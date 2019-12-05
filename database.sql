--
-- Base de données :    'Sombra'
--

-- --------------------------------------------------------

--
-- Structure de la table 'IDENTITE'
--

CREATE TABLE 'IDENTITE' (
    'idIdentite' int(11) NOT NULL,
    'nom' varchar(30) NOT NULL,1
    'prenom' varchar(30) NOT NULL,
    'email' varchar(50) NOT NULL,
    'dateNaissance' date NOT NULL,
    'genre' varchar(15) NOT NULL
);

-- --------------------------------------------------------

--
-- Structure de la table 'IMAGE'
--

CREATE TABLE 'IMAGE' (
    'idPhoto' int(11) NOT NULL,
    'lienImage' varchar(100) NOT NULL
);

-- --------------------------------------------------------

--
-- Structure de la table 'MESSAGE'
--

CREATE TABLE 'MESSAGE' (
    'idMessage' int(11) NOT NULL,
    'auteur' int(11) NOT NULL,
    'message' varchar(255) NOT NULL,
    'image' int(11)
);

-- --------------------------------------------------------

--
-- Structure de la table 'USER'
--

CREATE TABLE 'USER' (
    'idUser' int(11) NOT NULL,
    'login' varchar(11) NOT NULL,
    'password' varchar(11) NOT NULL,
    'identite' int(11) NOT NULL
);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table 'IDENTITE'
--
ALTER TABLE 'IDENTITE'
    ADD PRIMARY KEY ('idIdentite');

--
-- Index pour la table 'IMAGE'
--
ALTER TABLE 'IMAGE'
    ADD PRIMARY KEY ('idPhoto');

--
-- Index pour la table 'MESSAGE'
--
ALTER TABLE 'MESSAGE'
    ADD PRIMARY KEY ('idMessage'),
    ADD KEY 'imageMessage' ('image'),
    ADD KEY 'userMessage' ('auteur');

--
-- Index pour la table 'USER'
--
ALTER TABLE 'USER'
    ADD PRIMARY KEY ('idUser'),
    ADD KEY 'userIdentLink' ('identite');

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table 'IDENTITE'
--
ALTER TABLE 'IDENTITE'
    MODIFY 'idIdentite' int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table 'IMAGE'
--
ALTER TABLE 'IMAGE'
    MODIFY 'idPhoto' int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table 'MESSAGE'
--
ALTER TABLE 'MESSAGE'
    MODIFY 'idMessage' int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table 'USER'
--
ALTER TABLE 'USER'
    MODIFY 'idUser' int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table 'MESSAGE'
--
ALTER TABLE 'MESSAGE'
    ADD CONSTRAINT 'imageMessage' FOREIGN KEY ('image') REFERENCES 'IMAGE' ('idPhoto') ON DELETE CASCADE ON UPDATE CASCADE,
    ADD CONSTRAINT 'userMessage' FOREIGN KEY ('auteur') REFERENCES 'USER' ('idUser') ON UPDATE CASCADE;

--
-- Contraintes pour la table 'USER'
--
ALTER TABLE 'USER'
    ADD CONSTRAINT 'userIdentLink' FOREIGN KEY ('identite') REFERENCES 'IDENTITE' ('idIdentite') ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;