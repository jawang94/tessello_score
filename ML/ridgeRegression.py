#!/usr/bin/env python3
import numpy as np
from sklearn.linear_model import Ridge

# Generates numbers close to a target value, with variable range
def numGen(target, diff):
    diff = np.clip(diff, 0, 1)
    target = target + (((np.random.ranf() * 2) - 1) * diff)
    
    #ALTERNATIVE GENERATOR
    #target = (target * (1 - diff)) + (np.random.ranf() * diff)

    return np.clip(target, 0, 1)

def arrayGen(targetArr, distArr, ts, ds):
    np.random.seed(0)
    #outArr = np.arr()
    #outArr = np.empty((distArr.size, targetArr.size))
    outArr = np.empty((ts,ds))
    #for target in range(targetArr.size):
    for target in range(ts):
        #for dist in range(distArr.size):
        for dist in range(ds):
            outArr[target][dist] = numGen(targetArr[target], distArr[dist])
    return outArr

n_samples, n_features = 1000, 5
np.random.seed(0)
y = np.random.rand(n_samples)
X = np.random.rand(n_samples, n_features)
#test = np.random.ranf(n_samples, n_features)
clf = Ridge(alpha=0)
clf.fit(X, y)
#print("y: " + np.array2string(y))
#print("X: " + np.array2string(X))
#print("test: " + np.array2string(test))
#print("weight vector: " + np.array2string(clf.coef_))
#print(y[0])
predictionArr = clf.predict(X)
#print("Simulated True Credit Scores")
#print(y)
#fakeX = np.fromfunction(numGen(1,0.2),(3,3))
#fakeX = arrayGen((0,1,0.5), (0,0.1,0.2), 3, 3)
#print("simulated indicators")

#diffArray = np.array([0.07,0.11,0.25, 0.5, 0.75, 0.95])

diffArray = np.array([0.5,0.1,0.2,0.1,0.4,0.6,0.7,0.7,0.9,0.9,0.9,0.9,0.9,0.5,0.7,0.7,0.6,0.6,0.3,0.8,0.4,0.4,0.4])

#newArray = np.array([0.5,0.1,0.2,0.1,0.4,0.6,0.7,0.7,0.9,0.9,0.9,0.9,0.9,0.5,0.7,0.7,0.6,0.6,0.3,0.8,0.4,0.4,0.9])
fakeX = arrayGen(y, diffArray, y.size, diffArray.size)
#print(numGen(1,0.1))
#print(fakeX)
#Ridge(alpha=1.0, copy_X=True, fit_intercept=True, max_iter=None, normalize=False, random_state=None, solver='auto', tol=0.001)
clf.fit(fakeX, y)
weights = clf.coef_
print("Weight Vector: " + np.array2string(weights))
print("Sum")
print(np.sum(weights))