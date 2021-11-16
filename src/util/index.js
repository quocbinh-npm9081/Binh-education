module.exports = {
    //Trường hợp có nhiều documents (Array) sử dụng cho list
    mutile_mongooseObject: function(mongooseArray) {
        return mongooseArray.map(mongoose => mongoose.toObject());
    },
    //Trường hợp chỉ có 1 documents (sử dụng cho trang chi tiết)
    mongooseObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}

// File util là File chứa các vấn đề logic( khi muốn sử dụng lại mà không vần phải viết đi viết lại nhiều lần)