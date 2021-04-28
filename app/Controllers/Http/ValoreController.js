'use strict'
const Valores = use ('App/Models/Valores')

class ValoreController {
    async index({response}){
        const data = await Valores.find({});
        try{
            return response.status(200).json(data);
        } catch(e){
            return response.status(400).send({'Error':e});
        }
    }

    async indexlast({response}){
        const data = await Valores.find().sort({$natural:-1}).limit(1);
        try{
            return response.status(200).json(data);
        } catch(e){
            return response.status(400).send({'Error':e});
        }
    }

    async temperatura({response}){
        const data = await Valores.find({Sensor:{$eq:"Temperatura"}}).sort({$natural:-1});
        try{
            return response.status(200).json(data);
        } catch(e){
            return response.status(400).send({'Error':e});
        }
    }

    async lastemperatura({response}){
        const data = await Valores.find({Sensor:{$eq:"Temperatura"}}).sort({$natural:-1}).limit(1);
        try{
            return response.status(200).json(data);
        } catch(e){
            return response.status(400).send({'Error':e});
        }
    }

    async pir({response}){
        const data = await Valores.find({Sensor:{$eq:"PIR"}}).sort({$natural:-1});
        try{
            return response.status(200).json(data);
        } catch(e){
            return response.status(400).send({'Error':e});
        }
    }

    async lastpir({response}){
        const data = await Valores.find({Sensor:{$eq:"PIR"}}).sort({$natural:-1}).limit(1);
        try{
            return response.status(200).json(data);
        } catch(e){
            return response.status(400).send({'Error':e});
        }
    }

    async humedadsuelo({response}){
        const data = await Valores.find({Sensor:{$eq:"Humedad del suelo"}}).sort({$natural:-1});
        try{
            return response.status(200).json(data);
        } catch(e){
            return response.status(400).send({'Error':e});
        }
    }

    async lasthumedadsuelo({response}){
        const data = await Valores.find({Sensor:{$eq:"Humedad del suelo"}}).sort({$natural:-1}).limit(1);
        try{
            return response.status(200).json(data);
        } catch(e){
            return response.status(400).send({'Error':e});
        }
    }

    async humedad({response}){
        const data = await Valores.find({Sensor:{$eq:"Humedad"}}).sort({$natural:-1});
        try{
            return response.status(200).json(data);
        } catch(e){
            return response.status(400).send({'Error':e});
        }
    }

    async lasthumedad({response}){
        const data = await Valores.find({Sensor:{$eq:"Humedad"}}).sort({$natural:-1}).limit(1);
        try{
            return response.status(200).json(data);
        } catch(e){
            return response.status(400).send({'Error':e});
        }
    }

    async graphtemp({response}){
        const data = await Valores.find({Sensor:{$eq:"Temperatura"}}).sort({$natural:-1}).limit(10);
        try{
            return response.status(200).json(data);
        }catch(e){
            return response.status(400).send({'Error':e});
        }
    }

    async graphume({response}){
        const data = await Valores.find({Sensor:{$eq:"Humedad"}}).sort({$natural:-1}).limit(10);
        try{
            return response.status(200).json(data);
        }catch(e){
            return response.status(400).send({'Error':e});
        }
    }

    async mostemp({response}){
        const data = await Valores.find({Sensor:{$eq:"Temperatura"}}).sort({Valor:-1}).limit(1);
        try{
            return response.status(200).json(data);
        }catch{
            return response.status(400).send({'Error':e})
        }
    }

    async worstemp({response}){
        const data = await Valores.find({Sensor:{$eq:"Temperatura"}}).sort({Valor:1}).limit(1);
        try{
            return response.status(200).json(data);
        }catch{
            return response.status(400).send({'Error':e})
        }
    }

    async mosthumedad({response}){
        const data = await Valores.find({Sensor:{$eq:"Humedad"}}).sort({Valor:-1}).limit(1);
        try{
            return response.status(200).json(data);
        }catch{
            return response.status(400).send({'Error':e})
        }
    }

    async worsthumedad({response}){
        const data = await Valores.find({Sensor:{$eq:"Humedad"}}).sort({Valor:1}).limit(1);
        try{
            return response.status(200).json(data);
        }catch{
            return response.status(400).send({'Error':e})
        }
    }

    async seco({response}){
        const data = await Valores.find({Sensor:{$eq:"Humedad del suelo"}}).count({Valor:"Seco"});
        try{
            return response.status(200).json(data)
        }catch{
            return response.status(400).json(data)
        }
    }

    async humedo({response}){
        const data = await Valores.find({Sensor:{$eq:"Humedad del suelo"}}).count({Valor:"Humedo"});
        try{
            return response.status(200).json(data)
        }catch{
            return response.status(400).json(data)
        }
    }

    async detecta({response}){
        const data = await Valores.find({Sensor:{$eq:"PIR"}}).count({Valor:"Se detecta movimiento"});
        try{
            return response.status(200).json(data)
        }catch{
            return response.status(400).json(data)
        }
    }

    async nodetecta({response}){
        const data = await Valores.find({Sensor:{$eq:"PIR"}}).count({Valor:"No se detecta movimiento"});
        try{
            return response.status(200).json(data)
        }catch{
            return response.status(400).json(data)
        }
    }

}

module.exports = ValoreController
