import user from '../models/user.js';
const show=(req,res)=>{
    res.send("hio")
}
const poste=async(req,res)=>{
  const wait = await user.insertMany(req.body);
   res.send("user inserted")
}
const updu=async(req,res)=>{
    let id = req.params.id;
    await user.findByIdAndUpdate(id,req.body);
    res.send("updated");
}
const dele = async(req,res)=>{
    let id = res.params.id;
    await user.findByIdAndDelete(id)
}
export {show,poste,updu,dele}