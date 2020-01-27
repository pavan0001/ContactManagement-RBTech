class stack extends Array
{
    constructor(...ele)
    {
        super(...ele);
    }
    pop()
    {
        if(this.length===0) 
        {
            console.log("stack is empyy");

        }
        else
        {
            super.pop()
        }
        
    }
}
const s = new stack(1,2,3)
s.push(100)
s.push(11)
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()
console.log(s)