export default (mongoose) => {
    const PresidentSchema = new mongoose.Schema({
        id: Number,
        firstName: String,
        lastName: String,
        dOB: String,
        prose: String,
        precededBy: String,
        succeededBy: String,
        website: String,
        wikipediaArticle: String,
        whiteHouseMapCoordinates: {
            x: Number,
            y: Number
        },
        photos: [
            {photo: String},
            {photo: String},
            {photo: String}
        ]
    });

    return mongoose.model("President", PresidentSchema).schema;
}