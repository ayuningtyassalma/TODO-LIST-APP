import List from "../models/ListModel.js"

export const getLists = async(req, res)=>{
    try {
        const lists = await List.find()
        res.json(lists)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getListsbyId = async(req, res)=>{
    try {
        const list = await List.findById(req.params.id)
        res.json(list)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const saveList = async(req, res)=>{
    const list = new List(req.body)
    try {
        const newList = await list.save(req.params.id)
        res.status(201).json(newList)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const updateList = async(req, res)=>{
    try {
        const updatedList = await List.updateOne({_id:req.params.id}, {$set: req.body})
        res.status(201).json(updatedList)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const deleteList = async(req, res)=>{
    try {
        const deletedList = await List.deleteOne({_id:req.params.id})
        res.status(201).json(deletedList)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}