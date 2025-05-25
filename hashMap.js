class hashMap{

    constructor(loadFactor = 0.75,initialCapacity = 8){
        this.loadFactor = loadFactor
        this.capacity = initialCapacity
        this.buckets = new Array(initialCapacity).fill(null).map(()=>[])
        this.size = 0
    }

    hash(key){
        
        let hashCode= 0

        const primeNumber = 31
        for(let i = 0;i<key.length;i++){
            hashCode = primeNumber * hashCode +key.charCodeAt(i)
        }
        return Math.abs(hashCode) % this.capacity;

    }

    set(key,value){
        let index = this.hash(key);

        if(index < 0 || index >= this.buckets.length){
            throw new Error('Index out of bounds')
        }

        if(!this.buckets[index]){
            this.buckets[index] = []
        }

        for(let bucket of this.buckets[index]){
           if( bucket[0] == key){
            bucket[1] = value
            return
           }
        }

        this.buckets[index].push([key,value])
        this.size++
    }

    get(key){

        let index = this.hash(key)

        if(!this.buckets[index]){
            return null
        }

        for(let bucket of this.buckets[index]){
            if(bucket[0]== key){
                return bucket[1]
            }
        }
    }
    
    has(key){

        let index = this.hash(key)

        if(!this.buckets[index]){
            return false
        }

        for(let bucket of this.buckets[index]){
            if(bucket[0] == key){
                return true
            }
        }
        return false
    }

    remove(key){
        let index = this.hash(key)

        if(!this.buckets[index]){
            return 'not found'
        }

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.size--
                return 'removed';
            }
        }
        return 'not found'
    }

    length(){
        return this.size
    }

    clear(){
        for(let i = 0;i < this.buckets.length;i++){
            this.buckets[i] = []
        }
        this.size = 0
        return 'deleted all entries'
    }

    keys(){

        const allKeys = []

        for(let i = 0; i < this.buckets.length;i++){
            for(let [key,_] of this.buckets[i]){
                allKeys.push(key)
            }
        }

        return allKeys
    }
  
    values(){
        const allValues = []

        for(let i = 0; i < this.buckets.length;i++){
            for(let [_,value] of this.buckets[i]){
                allValues.push(value)
            }
        }
        return allValues
    }

    entries(){
        const entries = []

        for(let bucket of this.buckets){
            for(let [key,value] of bucket){
                entries.push([key,value])
            }
        }
        return entries
    }
}

const test = new hashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('apple','rotten')
console.log(test.get('apple'))
console.log(test.length())

