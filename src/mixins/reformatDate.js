export const reformatDate = { 
    data() {
        return {
          
        };
    },
    methods: {
        reformatDate: function(date) {
            let newDate = new Date(date);
            let day = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let fullYear = newDate.getFullYear();
            if (day < 10) {
                day = "0" + day;
            }
            if (month < 10) {
                month = "0" + month;
            }
            let parseDate = day + "." + month + "." + fullYear;
            return parseDate;
        },
    },

}