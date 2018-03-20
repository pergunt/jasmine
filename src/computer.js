const computer = {
    RAM: 2,
    spaceGBs: 1000,
    addMemory(...count) {
        if (count.length > 2) return false;
        return this.RAM = count.reduce( (prev, curr) => prev + curr, this.RAM );
    },
    get getCurrentMemory() {
        return this.RAM;
    }
};

