  
const mongoose = require('mongoose');

const dispatch = useDispatch();
dispatch(userClickedOnThatButton())
actions:

const userClickedOnThatButton = (button_id) => {
    return {
        type: "CLICKED_BUTTON",
        payload: button_id
    }
}


module.exports = mongoose.model('User', userSchema);