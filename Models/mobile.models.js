const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mobileSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        // ref: 'User'
    },
    manufacturer: {
        type: String,
        required: [true, 'Mobile name must be provided']
    },
    model: {
        type: String,

        default: false
    },
    image: {
        type: String,

    },
    price: {
        type: Number,

    },
    description: {
        type: String,

    },
    specs: {
        body: {
            type: String,

        },
        camera: {
            main: String,
            selfie: String,
            features: String,

        },
        memory: {
            type: String,

        },

        battery: {
            type: String,
        },

        chipset: {
            type: String,

        },

        display: {
            type: String,
        },

        features: {
            type: String,

        },

        plateform: {
            type: String,
        }

    },
    stock: {
        type: Number,

    }

});

const Mobile = mongoose.model('Mobile', mobileSchema);
module.exports = Mobile;
