'use strict';

import mongoose from 'mongoose';

const cookieSchema = mongoose.Schema({
  type: { type:String, required:true },
  size: { type:String, uppercase:true, required:true },
  dateBaked: {type:Date},
  
});

export default mongoose.model('cookies', cookieSchema);