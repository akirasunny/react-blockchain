const dummyArray = [];

for (let i = 0; i < 10; i++) {
    dummyArray.push({
        index: i,
        show: i < 5
    });
};

export const INIT_STATES = {
    currencies: dummyArray
};