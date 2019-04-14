#!/usr/bin/env python3
import numpy as np
from sklearn.linear_model import Ridge

# Generates numbers close to a target value, with variable range
def numGen(target, diff, positive=True):
    diff = np.clip(diff, 0, 1)
    val = target
    if not positive :
        val = 1 - target
    target = val + (((np.random.ranf() * 2) - 1) * diff)
    
    #ALTERNATIVE GENERATOR
    #target = (target * (1 - diff)) + (np.random.ranf() * diff)

    return np.clip(target, 0, 1)

def arrayGen(targetArr, distArr):
    np.random.seed(0)
    outArr = np.empty((targetArr.size,distArr.size))
    #for target in range(targetArr.size):
    for target in range(targetArr.size):
        #for dist in range(distArr.size):
        for dist in range(distArr.size):
            if dist < distArr.size - 4:
                outArr[target][dist] = numGen(targetArr[target], distArr[dist], positive=True)
            else:
                outArr[target][dist] = numGen(targetArr[target], distArr[dist], positive=False)
    return outArr

def writeOutput(y, simulatedX):
    simX = simulatedX.tolist()
    with open('database.csv', 'w+') as fp:
        fp.write('Crime,Income-Debt Ratio,Assets & Liquidity,Payment Timing,Spending rel. Income,Establishment,Debt & Obligations,Current Macroeconomic Climate,Social Media Presence,Location,Quality of Associations,Consistency,Gambling,Organization,Abnormal Purchase Hist,Real Credibility\n')
        for i in range(len(simX)):
            for j in range(len(simX[0])):
                fp.write(str(simX[i][j]) + ',')
            fp.write(str(y[i]) + '\n')
    np.savetxt("yVals.csv", y, delimiter=",")
    np.savetxt("simulatedVals.csv", simulatedX, delimiter=",")

n_samples = 10000
np.random.seed(0)
y = np.random.rand(n_samples)
clf = Ridge(alpha=0)
#diffArray = np.array([0.07,0.11,0.25, 0.5, 0.75, 0.95])

diffArray = np.array([0.45,0.18,0.23,0.15,0.36,0.54,0.17,0.69,0.82,0.55,0.65,0.61,0.39,0.20,0.42])
#diffArray = np.array([0.45,0.18,0.23,0.15,0.36,0.54,0.17,0.69,0.82,0.55,0.65,0.61,0.39,0.20,0.8])
simulatedX = arrayGen(y, diffArray)
print(simulatedX[0])
clf.fit(simulatedX, y)
weights = clf.coef_
writeOutput(y, simulatedX)
print("Weight Vector: " + str(np.ndarray.tolist(weights)))
sm = np.sum(weights)
weights = np.abs(weights)
sm = np.sum(weights)
np.sum(np.abs(weights))
print(str(clf.predict(simulatedX)[0]))

percents = list(map(lambda x : x * 100 / sm, np.ndarray.tolist(weights)))
print("Percentages: " + str(percents))