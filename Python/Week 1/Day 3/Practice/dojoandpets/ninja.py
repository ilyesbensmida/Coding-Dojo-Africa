from pet import Pet

class Ninja:
    def __init__(self, first_name, last_name,treats,pet_food,pet):
        self.first_name = first_name
        self.lasr_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet=pet

        def walk(self):
            self.pet.play()

        def feed(self):
            self.pet.eat()

        def bathe(self):
            self.pet.noise()

Ninja1 = Ninja("John", "Doe", 10,5, Pet("fluffy", "Dog", ["Sit", "Roll over"]))
            
        