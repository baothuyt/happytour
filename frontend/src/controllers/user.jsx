import path from "../ultils/path"
import asyncHandler from 'asyncHandler';
const getUsers = asyncHandler(async (req, res) =>{
    const queries = {...req.query}
    
    // Tách các trường đặc biệt ra khỏi query
    const excludeFields = ['limit', 'sort', 'page', 'fields']
    excludeFields.forEach(el => delete queries[el])

    //Format lại các operators cho đúng cú pháp mongose
    let queryString = JSON.stringify(queries)
    queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, macthedEl => `$${macthedEl}`)
    const formatedQueries = JSON.parse(queryString)
  
    // Filtering
    // if (queries?.firstname) formatedQueries.firstname = { $regex: queries.firstname, $options: 'i'}
    // if (queries?.lastname) formatedQueries.lastname = { $regex: queries.lastname, $options: 'i'}
    if (queries?.name) formatedQueries.name = { $regex: queries.name, $options: 'i'}
    
    // console.log(req.query.q)
    if (req.query.q){
        delete formatedQueries.q
        formatedQueries['$or'] = [
            { firstname: { $regex: req.query.q, $options: 'i'}},
            { lastname: { $regex: req.query.q, $options: 'i'}},
            { email: { $regex: req.query.q, $options: 'i'}}
        ]
    }  
    // console.log(formatedQueries)
    let queryCommand = User.find(formatedQueries)

    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ')
        queryCommand = queryCommand.sort(sortBy)
    }

    if (req.query.fields) {
        const fields = req.query.fields.split(',').join(' ')
        queryCommand = queryCommand.select(fields)
    }

    const page = +req.query.page || 1
    const limit = +req.query.limit || process.env.LIMIT_USERS
    const skip = (page - 1) * limit
    queryCommand.skip(skip).limit(limit)
    queryCommand.exec(async (err, response) =>{
        if (err) throw new Error(err.message)
        const counts = await User.find(formatedQueries).countDocuments()
        return res.status(200).json({
            success: response ? true : false,
            counts,
            user: response? response : 'Cannot get user '
        })
    })

});

const createUsers = asyncHandler(async (req, res) => {
    const response = await User.create(users)
    return res.status(200).json({
        success: response ? true : false,
        users: response? response : 'Cannot get user '
    })

})

// const updateUserByAdmin = asyncHandler(async(req, res) =>{
//     const {uid} = req.params
//     if (Object.keys(req.body).length ===0) throw new Error('Missing inputs')
//     const response = await User.findByIdAndUpdate(uid, req.body, { new: true}).select('-password -role -refreshToken')
//     return res.status(200).json({
//         success: response ? true : false,
//         mes: response ? 'Update' : 'Some thing went wrong'
//     })
// })

module.exports = {
    getUsers,
    createUsers,
    // updateUserByAdmin
}

