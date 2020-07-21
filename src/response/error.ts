export const errorResponse = (message: String, success:Boolean = false ) => {
    return {
        success,
        error: message
    }
}