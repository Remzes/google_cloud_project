export default (mongoose, presidentModel) => {
    const CountrySchema = new mongoose.Schema({
        _id: mongoose.Schema.ObjectId,
        name: String,
        flag: String,
        foundationDate: String,
        abbreviation: String,
        presidents: [presidentModel]
    });

    return mongoose.model("Country", CountrySchema, "countries");
}