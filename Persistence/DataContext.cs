using Domain;
using MongoDB.Driver;
namespace Persistence;

public class DataContext
{
    private readonly IMongoDatabase _database;
    private readonly IMongoClient _client;

    public DataContext(string connectionString, string databaseName)
    {
        _client = new MongoClient(connectionString);
        _database = _client.GetDatabase(databaseName);
    }

    public IMongoCollection<Course> Courses => _database.GetCollection<Course>("Courses");
    public IMongoClient Client => _client;
    public IMongoCollection<School> Schools => _database.GetCollection<School>("Schools");
}