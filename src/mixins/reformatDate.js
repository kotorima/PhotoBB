export const reformatDate = { 
    methods: {
        reformatDate: function(date) {
            let newDate = new Date(date);
            let day = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let fullYear = newDate.getFullYear();
            let parseDate = day + "." + month + "." + fullYear;
            return parseDate;
        },
    },

}