// let arr: Array<string> = ['Aslbek', 'Aisha', 'Dilshodbek ', 'Umidbek', 'Ilyosbek','Diyorbek','Shokirjon','Sanjarbek','Akmalbek']



//? 1masala
// for(let i=0; i < arr.length; i++){
//   console.log(arr[arr.length-i]);
// }

//? 2masala
// let a:string[]=arr.slice(0,4)
// for(let i=1; i<=a.length; i++)
// {
//     console.log(a[a.length - i]);
    
// }

// let b:string[]=arr.slice(4,9)

// for(let i=1; i<=b.length; i++)
// {
//     console.log(b[b.length - i]);
   
// }
// let c:string[]=[...b , ...a]
// console.log(c);

// ?3masala
// let a:string[]=arr.slice(0,3)
// for(let i=1; i<=a.length; i++)
// {
//     console.log(a[a.length - i]);
    
// }
// let b:string[]=arr.slice(3,6)

// for(let i=1; i<=b.length; i++)
// {
//     console.log(b[b.length - i]);
    
    
// }
// let d :string[]=arr.slice(6,9)
// for(let i=1; i<=d.length; i++)
// {
//     console.log(d[d.length - i]);
    
    
// }


// let c:string[]=[...d , ...b, ...a]
// console.log(c);

//? masala4
// let newAll :string []=[arr[3],arr[4], arr[1], arr[7]]
// console.log(newAll);

// ?masala5 1usul
// console.log(arr.indexOf('Diyorbek'));
// ?masala5 2usul
// let s:number =0
// for(let i=0; i<arr.length;i++){
// if(arr[i]=='Diyorbek'){
//     console.log(i);
    
// }
// }





// !Array access operator
// console.log(`${arr[0]} va ${arr[2]} djad`);

// ! Array assigment operation
// arr [2]= 'Dilshodbek'
// console.log(arr);

// arr.push()
// console.log(arr);

// let pupil:string=arr.shift()!

// console.log(arr);
// console.log(pupil);

// arr.unshift(pupil!)

// console.log(arr);

// !deleted
// delete arr[2]
//  arr.splice(2,1)

//  console.log(arr);
 
//  !Slice
// let pubgTeam: string[]= arr.slice(1, 3)
// console.log(pubgTeam);
// console.log(arr);

// let pubgTeam146: string[]=['Javohir ', 'Feruzbek','Otajon']

// let nodePubg :string[]=pubgTeam.concat(pubgTeam146)
// let nodePubg :string[]=[...pubgTeam , ...pubgTeam146]
// console.log(nodePubg);
