class Stack 
{
    constructor()
    {
        this.data = [];
        this.top = 0;
    }
    push(element) 
    {
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
   length() 
   {
      return this.top;
   }
   isEmpty() 
   {
     return this.top === 0;
   }
   pop() 
   {
    if( this.isEmpty() === false ) 
    {
       this.top = this.top -1;
       return this.data.pop(); 
     }
   }
   print() 
   {
      var top = this.top - 1;  
      while(top >= 0) 
       { 
          console.log(this.data[top]);
           top--;
       }
    }
}