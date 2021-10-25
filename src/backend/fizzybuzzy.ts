export default class FizzyBuzzyBackend {
    static fizzyBuzzy(num: number): string {
        try {
            const fizz = (num%3) == 0;
            const buzz = (num%5) == 0;

            if(buzz){
                return "Buzz";
            } else if(fizz){
                return "Fizz";
            } else {
                return "FizzBuzz";
            }
        } catch (error) {
            return "Error occurred";
        }
    }
}