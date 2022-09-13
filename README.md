*Grdient Descent Algorithm*<br /> 
In Today’s world, Artificial Intelligence is transforming and reaching higher heights. In the process of learning new things, as a human, we make mistakes and try to correct learning from our mistakes. In the same way machines under the supervision of humans try to correct their predictions on a particular task. Gradient Descent Algorithm is the algorithm used to reduce the cost function using the concept of gradients and differential calculus to reach global optimum. This mini-project is developed using Java for code, React JS for logic and Graphical User Interface.
**1.1 INTRODUCTION TO GRADIENT DESCENT ALGORITHM**<br /> 
Gradient descent is a first-order iterative optimization algorithm for finding a local minimum of a differentiable function. The idea is to take repeated steps in the opposite direction of the gradient (or approximate gradient) of the function at the current point, because this is the direction of steepest descent. Conversely, stepping in the direction of the gradient will lead to a local maximum of that function; the procedure is then known as gradient ascent.

**1.2 WORKING OF THE PROJECT:**<br /> 
Gradient is a vector that is tangent of a function and points in the direction of greatest increase of this function. Gradient is zero at a local maximum or minimum because there is no single direction of increase. In mathematics, gradient is defined as partial derivative for every input variable of function.
To find the global optimum which is the minimum loss, we will make the algorithm descent towards global minima and update the previous weights and bias with new ones. The algorithm used is
 ![image](https://user-images.githubusercontent.com/61362200/128690915-98a402dd-b5ac-48f0-a143-a914ed92a658.png)

					1a. Weight updating by using gradient descent
The previous weights and bias will be updated by new ones which are obtained by subtracting the learning rate time of its gradient.
Where Alpha is a learning rate, which says how fast the descent should be. If alpha is large then the step size of decent will be large and vice versa.

The algorithm tries to decrease the cost of the data, to achieve greater accuracies.

Gradient Descent Algorithm plays a vital role in reducing the loss in the prediction mail in Supervised Learning of Artificial Intelligence.
As gradient is a vector pointing at the greatest increase of a function, negative gradient is a vector pointing at the greatest decrease of a function. Therefore, we can minimize a function by iteratively moving a little bit in the direction of negative gradient. That is the logic of gradient descent.
![image](https://user-images.githubusercontent.com/61362200/128691582-fdac8289-960a-4ca3-8b3c-ebddca4066c6.png)

When solving the problems with more than one variable then the Cost function graph will be n+1 dimensional graph where  n is number of variables in the given equation. 
**
H(x) = w1*x! +w2*x2 +w3*x3+…….wn+xn +b
**
Where w1, w2, w3,…wn are weights are respective statistical priority of that particular feature
B is bias
For better analysis of Gradient Descent Algorithm, Contour plots of the 3-D graphs are plotted which depicts the better visualization of descending in gradient.
![image](https://user-images.githubusercontent.com/61362200/128691061-fc7229b4-6d6a-4182-b4ec-1679741bf14d.png)
React JS is used to build logic of the algorithm. Recursion is used to the gradient in the particular iteration. The hyperparameters plays an important role in deciding the accuracy. So, Recharts library from npm is used to make a interactive UI to depict the change of loss and predictions by changing number of iterations and learning rate.
	The weights and bias are initialized with zeroes and prediction by finding hypothesis function made by the algorithm which is compared with original value. 
![image](https://user-images.githubusercontent.com/61362200/128691218-42c63262-81b9-4ca5-af2c-1a58e4aed524.png)

**References**<br /> 
1.	https://en.wikipedia.org/wiki/Gradient_descent
2.	https://towardsdatascience.com/an-introduction-to-gradient-descent-c9cca5739307
3.	https://techyvishnu.medium.com/linear-regression-37b35ee60573


**For more details: https://techyvishnu.medium.com/linear-regression-37b35ee60573 **


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
