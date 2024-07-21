const asyncHandler = require('express-async-handler')
const slugify = require ('slugify')
const createTour = asyncHandler(async (req, res) =>{
    const {name, price, category, description}= req.body
    const thumb = req.file
    // if (!!(name && price && category && description)) throw new Error ('Missing inputs')
    //     req.body.slug = slugify(name)
    //     const newTour = await Tour.create(req.body)
        return res.status(200).json({
            // success: newTour ? true: false,
            // createTour: newTour ? newTour : 'Cannot create new tour'
            thumb
        })
})