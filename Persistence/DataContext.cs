using Domain;
using MongoDB.Driver;
namespace Persistence;

public class DataContext
{
    private readonly IMongoDatabase _database;

    public DataContext(string connectionString, string databaseName)
    {
        var client = new MongoClient(connectionString);
        _database = client.GetDatabase(databaseName);
    }

    public IMongoCollection<Course> Courses => _database.GetCollection<Course>("Courses");
}