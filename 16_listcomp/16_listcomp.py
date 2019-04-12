# Vincent Chi
# SoftDev2 pd7
# K16 -- Do You Even List?
# 2019-04-12

UC = "ABCDEFHIJKLMNOPQRSTUVWXYZ"
LC = UC.lower()
nums = "1234567890"
specialChars = ".?!&#,;:-_*"
	
	
def threshhold(password):
    check = [0 if x in UC else 1 if x in LC else 2 if x in nums else 3 for x in password]
    if(0 in check and 1 in check and 2 in check):
        return True;
    return False
	
threshhold("P4ssW0rd")

def passwordStrength(password):
    check = [0 if x in UC else 1 if x in LC else 2 if x in nums else 3 if x in chars else 4 for x in password]
    passStrength = 0
    if(0 in check):
        passStrength += 2
    if(1 in check):
        passStrength += 2
    if(2 in check):
        passStrength += 2
    if(3 in check):
        passStrength += 2
    if(len(check) >= 10):
        passStrength += 2
    return passStrength
	
print(passwordStrength("qnoeg;,qbQWIHG12039"))