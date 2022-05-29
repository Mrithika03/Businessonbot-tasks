Business-On-Bot---Part-2

# Pre-processing of tweets include the following steps:
Removing punctuations, hyperlinks and hashtags
Tokenization — Converting a sentence into list of words
Converting words to lower cases
Removing stop words
Lemmatization/stemming — Transforming a word to its root word

# Usage of ML Models
 --> Logistic Regression:
    As a part of building sentiment classifier using logistic regression, we train the model on twitter sample dataset. The dataset available is in its natural human format of tweets, which is not so easy for a model to understand. Thus we will have to do some data pre-processing and cleaning to break down the given text into a easily understood format for the model.
     A classification algorithm that predicts a binary outcome based on independent variables. It uses the sigmoid function which outputs a probability between 0 and 1. Words and phrases can be either classified as positive or negative. For example, “super slow processing speed” would be classified as 0 or negative.

 --> Random Forest:
    The  random forest  algorithm  can be  used  for both regression and classification tasks. This study conducts a sentimental analysis with data sources from Twitter using the  Random Forest algorithm approach,  we  will  measure  the  evaluation  results  of  the algorithm  we  use  in  this  study. The  accuracy  of measurements  in  this  study,  around  64.49%.  the  model  is good  enough.
    
 --> Multinomial Naive Bayes:
    A Pipeline class was used to make the vectorizer => transformer => classifier easier to work with. Such hyper-parameters as n-grams range, IDF usage, TF-IDF normalization type and Naive Bayes alpha were tunned using grid search. The performance of the selected hyper-parameters was measured on a test set that was not used during the model training step.
    
 --> Support Vector Classifier:
    We will build a simple, linear Support-Vector-Machine (SVM) classifier. The classifier will take into account each unique word present in the sentence, as well as all consecutive words. To make this representation useful for our SVM classifier we transform each sentence into a vector. The vector is of the same length as our vocabulary, i.e. the list of all words observed in our training data, with each word representing an entry in the vector. If a particular word is present, that entry in the vector is 1, otherwise 0.
    
 --> Decision Tree Classifier:
    Decision tree is the most powerful and popular tool for classification and prediction. A Decision tree is a flowchart like tree structure, where each internal node denotes a test on an attribute, each branch represents an outcome of the test, and each leaf node (terminal node) holds a class label.
    
 --> K Nearest Neighbour:
    The major problem in classifying texts is that they are mixture of characters and words. We need numerical representation of those words to feed them into our K-NN algorithm to compute distances and make predictions.

 --> Gaussian Naive Bayes:
    In order to predict the sentiment of a tweet we simply have to sum up the loglikelihood of the words in the tweet along with the logprior. If the value is positive then the tweet shows positive sentiment but if the value is negative then the tweet shows negative sentiment.

# Conclusion
The best fit model is Random Forest with an accuracy of 64.49%. The tweets are passed as input to the model and classified as 'Positive' or 'Negative'.

