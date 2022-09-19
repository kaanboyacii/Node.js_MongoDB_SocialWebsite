import User from "../models/userModel.js";

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            succeded: true,
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        })
    }
};

const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find({})
        res.status(200).render("photos", {
            photos,
            link: 'photos',
        });
        ({
            succeded: true,
            photos,
        });
    }
    catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        })
    }
};

const getAPhoto = async (req, res) => {
    try {
        const photo = await Photo.findById({ _id: req.params.id })
        res.status(200).render('photo', {
            photo,
            link: 'photos',
        });
    }
    catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        })
    }
};

export { createUser, getAllPhotos, getAPhoto };