const useMap = () => {
    const map = [
        {
            structure: [["E", "A", "S", "Y"]],
            position: {
                x: 14,
                y: 15,
            },
        },   
        {
            structure: [["P", "E", "A", "S", "Y"]],
            position: {
                x: 14,
                y: 17,
            },
        },        
    ];
    const getMap = () => {
        return map;
    };

    return { functions: { getMap } };
};

export default useMap;
