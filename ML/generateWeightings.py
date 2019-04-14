#!/usr/bin/env python3
import numpy as np
import csv
from sklearn.linear_model import Ridge

def arrayParse(dataset):
    X = np.empty((dataset.shape[0], dataset.shape[1] - 1))
    y = np.empty(dataset.shape[0])
    print(dataset.shape[0])
    for i in range(dataset.shape[0]):
        for j in range(dataset.shape[1] - 1):
            if j == dataset[0].size - 1:
                y[i] = dataset[i][j]
            else:
                X[i][j] = dataset[i][j]
    return X, y

with open('database.csv', newline='') as csvfile:
    dataset = np.array(list(csv.reader(csvfile)))
#print(dataset)

clf = Ridge(alpha=0)
X, y = arrayParse(dataset)
clf.fit(X, y)
weights = clf.coef_
print("Weight Vector: " + str(np.ndarray.tolist(weights)))
print("Generated from " + str(dataset.size) + " datapoints")

percents = list(map(lambda x : x * 100 / np.sum(np.abs(weights)), np.ndarray.tolist(weights)))
print("Percentages: " + str(percents))