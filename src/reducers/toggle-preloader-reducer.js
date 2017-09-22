export default function ( state=null, action ) {
    switch( action.type ) {

        case "TOGGLE_PRELOADER":
        return action.payload;


        default:
        return state;
    }
}