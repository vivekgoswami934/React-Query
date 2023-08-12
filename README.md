# Getting Started with Create React App


## What
A library for fetching data in react applications.

## Why 

1- Since React is a UI Library , there is no specefic patttern for data fetching.
2- useEffect hook for data fetching and useState hook to maintain component state like loading, error and resulting datas.
3- If the data is needed thorughout the app, we tend to use state management libraries.
4- Most of the state management libraries are good for working with client state.
 Ex - 'theme' for the application / whether is model open 

5- State management libraries are not great for working with asynchronous or server state.

# Client vs Server state
## Client State 
Persisted in your application memory and accessing or updating it is synchronous.
 
## Server State
Persisted remotely and requires asynchronous APIs for fetching or updating.
Has shared ownership.
Data can be updated by someone else without your knowledge.
UI data may not be sync with the remote data.
Challenging when you have to deal with caching, deduping multiple request for the same data,updating stale data in the background, performance optimizations etc.



## Basic Queries 
## Poll Data
## RQ dev tools 
## Create reusable query hooks 
## Query by ID
## Parallel Queries 
## Dynamic Queries
## Dependent Queries
## Infinite and Paginated Queries
## Update data using mutations
## Invalidate queries
## Optimistic updates
## Axios Interceptors


