class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(!strs?.length) return null
        return strs.join("shiva")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === null) return [];
        return str.split("shiva")
    }
}
