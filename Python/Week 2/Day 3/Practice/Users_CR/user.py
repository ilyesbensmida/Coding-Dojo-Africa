from mysqlconnection import connectToMySQL

db = "users_schema"

class User:

    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    def full_name(self):
        fullname = f"{self.first_name} {self.last_name}"
        return fullname

    @classmethod
    def save(cls, data ):
        query = """
        INSERT INTO users ( first_name, last_name, email, created_at, updated_at )
        VALUES ( %(fname)s, %(lname)s, %(email)s, NOW(), NOW() );"""
        return connectToMySQL(db).query_db( query, data )

    

   

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(db).query_db(query)
        users = []
        for user in results:
            users.append( cls(user) )
        return users