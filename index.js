var EC = require('elliptic').ec;
var curves = ['secp256k1','p192','p224','p256','p384','p521'];

function generateEC(curveType){
   return new EC(curveType);
}


function generateKeyPair (ec){
    var A = ec.genKeyPair();
    var B = ec.genKeyPair();
    var C = ec.genKeyPair();

    var AB = A.getPublic().mul(B.getPrivate())
    var BC = B.getPublic().mul(C.getPrivate())
    var CA = C.getPublic().mul(A.getPrivate())

    var ABC = AB.mul(C.getPrivate())
    var BCA = BC.mul(A.getPrivate())
    var CAB = CA.mul(B.getPrivate())


    console.log(ABC.getX().toString(16))
    console.log(BCA.getX().toString(16))
    console.log(CAB.getX().toString(16))
}

function allPossibleCurves(){
     for(let i= 0 ;i< curves.length;i++){
          console.log('Curved used is ',curves[i]);
          curve = curves[i];
          let ec =generateEC(curve);
          const start = performance.now();
          generateKeyPair(ec);
          const end = performance.now();
          console.log(`Execution time: ${end - start} ms`);

     }
}
allPossibleCurves();



