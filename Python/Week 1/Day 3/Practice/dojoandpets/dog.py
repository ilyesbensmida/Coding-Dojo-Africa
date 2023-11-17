from pet import Pet

class Dog(Pet):
    def __init__(self, name, pet_type, tricks):
        super().__init__(name, "Dog", tricks)


Dog1 = Dog("mohssen ",["yorgod", "yzidyorgod"])


