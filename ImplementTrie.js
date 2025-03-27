
var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(!node.children[char]){
            node.children[char] = new TrieNode();
        }
        node = node.children[char];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(!node.children[char]){
            return false;
        }
        node = node.children[char];
    }

    return node.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for(let i = 0; i < prefix.length; i++){
        let char = prefix[i];
        if(!node.children[char]){
            return false;
        }
        node = node.children[char];
    }
    return true;
};

let TrieNode = function(){
    this.children = {};
    this.isEnd = false;
}

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // return True
console.log(trie.search("app"));     // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app"));     // return True