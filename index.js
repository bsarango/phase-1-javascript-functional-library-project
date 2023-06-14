function myEach(collection, callbackFn){
    const newCollection = Object.values(collection)
    for(const element of newCollection){ 
        callbackFn(element);
    }
    return collection
}

function myMap(collection, callbackFn){
    const newCollection = Object.values(collection)
    const modifiedValuesArray = []
    for(const element of newCollection){
        modifiedValuesArray.push(callbackFn(element))
    }
    return modifiedValuesArray
}

function myReduce(collection, callbackFn, acc){ //put acc into code
    console.log({collection,acc})
    let accumulator=0
    const newCollection = Object.values(collection)
    if(acc !== undefined){
        accumulator=acc
        for(const element of newCollection){
        accumulator = callbackFn(accumulator,element,newCollection)
        }
    }
    
    else if(acc === undefined){
        const adjustedCollection = newCollection.slice(1)
        accumulator = newCollection[0]
        for(const element of adjustedCollection){
            accumulator = callbackFn(accumulator,element,adjustedCollection)
        }
    }
    return accumulator
}

function myFind(collection, predicate){     //work to make the iteration stop early once it finds the desired element
    let newCollection = Object.values(collection)
     
    for(const element of newCollection){
        
        if (predicate(element)){
            
            return element
        }    
    }
    return undefined
}

function myFilter(collection, predicate){
    let newCollection = Object.values(collection)
    const filteredValues = []
    
    for(const element of newCollection){
        if (predicate(element)){
             filteredValues.push(element)
        }
    }
    return filteredValues
}

function mySize(collection){
    const newCollection = Object.values(collection)
    return newCollection.length
}

//Array Functions
function myFirst(collection, numOfElements){
    if(numOfElements!== undefined){
        const arrayOfDesiredElements =[]
        for(let i=0;i<numOfElements;i++){
            arrayOfDesiredElements.push(collection[i])
        }
        return arrayOfDesiredElements
    }
    return collection[0]
}

function myLast(collection, numOfElements){
    if(numOfElements!==undefined){
        const arrayOfDesiredElements = []
        for(let i=collection.length-numOfElements;i<collection.length;i++){
            arrayOfDesiredElements.push(collection[i])
        }
        return arrayOfDesiredElements
    }
    return collection[collection.length-1]
}

//Object Functions
function myKeys(collection){
    const arrayOfKeys= Object.keys(collection)
    return arrayOfKeys
}

function myValues(collection){
    const arrayOfValues = Object.values(collection)
    return arrayOfValues
}