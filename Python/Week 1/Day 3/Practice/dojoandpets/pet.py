class Pet:
    def __init__(self,name,pet_type,tricks):
        self.name =name
        self.pet_type = pet_type
        self.tricks = triks
        self.health = 100
        self.energy = 100
        
    def sleep(self):
        self.energy +=25
    def eat(self):
        self.energy += 5
        self.health += 10
    def paly(self):
        self.health +=5
    def noise(self):
        if(self.pet_type == "Dog"):
            print("Woof")
        elif(self.pet_type == "Cat"):
             print("Meaow")
        else:
            print("haaaa !")


pet1 = Pet("Fluffy","Dog",["Sit","Roll over "])