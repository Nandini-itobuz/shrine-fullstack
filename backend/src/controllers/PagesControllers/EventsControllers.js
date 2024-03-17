
export function currentEventPost(req,res){
  const dataAll=req.body.data
  res.status(200).json({ message: 'POST request received', data: dataAll });
  console.log(dataAll)
}

