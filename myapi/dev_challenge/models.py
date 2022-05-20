from django.db import models

# Create your models here.
class Factorial(models.Model):
    operand = models.IntegerField()
    result = models.IntegerField()

    def __str__(self) -> str:
        return self.operand

class SquareRoot(models.Model):
    operand = models.IntegerField()
    result = models.IntegerField()

    def __str__(self) -> str:
        return self.operand

class CommonMultiples(models.Model):
    operand1 = models.IntegerField()
    operand2 = models.IntegerField()
    commonMultiples = models.TextField()

    def __str__(self) -> str:
        return str(self.operand1) + "and " + str(self.operand2)

