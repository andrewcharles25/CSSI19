story = """People have been coming to the {0},complaining about the same problems every time. One day he told them a joke and everyone roared in laughter. 
After a couple of minutes, he told them the same joke and only a few of them smiled.
When {1} told the same joke for the {2} time no one {3}anymore.
The wise man smiled and said worrying won't solve your problems, it'll just waste your {4} and energy."""

noun1 = raw_input("Enter a noun:\n")
noun2 = raw_input("Enter a noun:\n")
noun3 = raw_input("Enter a noun:\n")
adjective = raw_input("Enter an adjective:\n")
number = raw_input("Enter a number:\n")

print story.format(noun1,noun2,noun3,adjective,number)