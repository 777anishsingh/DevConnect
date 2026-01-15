const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 30
        },
        lastName: {
            type: String,
            minLength: 3,
            maxLength: 30

        },
        emailId: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            minLength: 6,
            maxLength: 50


        },
        age: {
            type: Number,
            required: true,
            min: 18,
            max: 57


        },
        gender: {
            type: String,
            required: true,
            lowercase: true,
            validate(value) {
                if (!["male", "female", "others"].includes(value)) {
                    throw new Error("Gender not valid")
                }
            }


        },
        password: {
            type: String,
            required: true,
            minLength: 8,
            maxLength: 30


        },
        photoUrl: {
            type: String,
            default: "ttps://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8="


        },
        about: {
            type: String,
            default: "This is you about section, Please write about yourself",
            maxLength: 200


        },
        skills: {
            type: [String],
            maxLength: 30

        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema)