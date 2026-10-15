# Équipe SEO pour Codex

**32 agents, huit pôles et un directeur**, avec Ranxplorer et Google Search Console en option. Ce pack réunit des rôles spécialisés pour préparer des analyses SEO, des plans d’action et des brouillons dans un projet local Codex.

- [Présentation et téléchargement](https://websolution24.github.io/equipe-seo-codex/)
- [Télécharger le ZIP v0.1.0](https://github.com/Websolution24/equipe-seo-codex/releases/download/v0.1.0/equipe-seo-codex-ranxplorer.zip)

Configuration Codex et connecteurs préparés par [WebSolution24 — websolution24.fr](https://www.websolution24.fr/).

## Installation

Il faut un environnement Codex/Work qui prend en charge les définitions natives d’agents et l’exécution locale. Un simple chat sans accès aux fichiers ne peut pas installer le pack sur l’ordinateur. Python 3.11 ou plus récent est nécessaire pour l’installateur et le connecteur Search Console.

1. Télécharge le ZIP et décompresse-le en conservant le dossier caché `.codex/agents/`.
2. Lis `LISEZ-MOI.md` et `INSTALLER.md` dans le pack.
3. Pour une installation guidée, joins le ZIP à un chat Work local et colle `PROMPT_INSTALLATION.txt`. Pour une installation manuelle, ouvre le pack décompressé dans un terminal et lance :

   ```text
   python installer.py --destination "chemin/vers/un-nouveau-projet"
   ```

4. L’installateur copie les fichiers publics dans un dossier neuf et vérifie leurs empreintes. Il refuse d’écraser un dossier existant et ne configure aucun compte.
5. Ajoute le dossier créé comme projet local dans Codex/Work, puis ouvre un nouveau chat. La création des fichiers ne crée pas automatiquement le projet dans l’application.
6. Remplis `seo/CONTEXTE.md` et vérifie que les rôles sont réellement disponibles avant de les utiliser.

Les 32 définitions forment un catalogue. Leur présence dans les fichiers ne garantit pas leur chargement dans chaque version de l’application. Les agents héritent du modèle et des permissions de l’utilisateur ; le directeur ne lance que les spécialistes nécessaires, dans la limite des places disponibles.

## Premier lancement

> Utilise seo-directeur pour faire le point sur mon site et me proposer les trois actions de la semaine. Vérifie la propriété Search Console connectée, les sources disponibles et le budget API Ranxplorer autorisé. Lance les agents nécessaires, attends leurs retours et montre-moi le plan avant toute action sur le site.

Le pack prépare des analyses et brouillons locaux. Toute publication, suppression, prise de contact ou dépense reste soumise à l’autorisation humaine applicable.

## Les 32 rôles

| Pôle | Agents |
| --- | --- |
| Stratégie et audit | `seo-directeur`, `seo-audit-global`, `seo-concurrents`, `seo-priorisation` |
| Recherche de mots-clés | `seo-mots-cles-business`, `seo-longue-traine`, `seo-intention`, `seo-clusters` |
| Rédaction d’articles | `seo-brief`, `seo-redacteur`, `seo-relecteur-eeat`, `seo-mise-a-jour` |
| Optimisation on-page | `seo-title-meta`, `seo-structure-hn`, `seo-donnees-structurees`, `seo-images-ux` |
| Maillage interne | `seo-cartographe`, `seo-silos`, `seo-ancres`, `seo-cannibalisation` |
| Technique et indexation | `seo-indexation`, `seo-crawl`, `seo-performance`, `seo-crawlers-ia` |
| Analyse et croissance | `seo-reporting`, `seo-quick-wins`, `seo-chute-trafic`, `seo-geo-visibilite` |
| Netlinking | `seo-profil-liens`, `seo-opportunites-liens`, `seo-outreach`, `seo-relations-presse` |

## Connexions optionnelles et coûts

Les tâches locales peuvent utiliser les exports fournis par l’utilisateur. Les connexions directes ne sont pas actives par la seule présence du pack. Aucun abonnement, compte, clé API ou crédit n’est inclus.

**Google Search Console.** Le connecteur local utilise le droit de lecture `webmasters.readonly`. Il demande un client OAuth Google personnel, le consentement du propriétaire du compte et le choix de la propriété. Sous Windows, `CONNECTER_SEARCH_CONSOLE.cmd` guide la préparation ; les autres systèmes peuvent utiliser le programme Python indiqué dans `seo/OUTILS_GSC.md`. Les autorisations sont conservées dans le coffre sécurisé du système. Aucun outil ne demande l’indexation, n’envoie de sitemap ou ne modifie la propriété.

**Ranxplorer.** La connexion directe demande un accès API personnel et des crédits. L’exemple `.codex/config.ranxplorer.example.toml` est désactivé. Configure personnellement la variable d’environnement `RANXPLORER_API_KEY`, hors du dépôt et du chat, puis suis `seo/OUTILS_RANXPLORER.md`. Autorise un plafond d’appels ou de crédits dans `seo/BUDGET_API.md` avant toute collecte payante.

L’utilisation de Codex et des services connectés dépend des accès et conditions de l’utilisateur. Le téléchargement ne prend pas en charge leurs éventuels coûts.

## Documentation dans le ZIP

- `LISEZ-MOI.md` : démarrage, installation et limites des sources.
- `INSTALLER.md` et `PROMPT_INSTALLATION.txt` : parcours d’installation guidée.
- `WORKFLOWS.md` : exemples de missions et coordination des agents.
- `seo/CONTEXTE.md` : contexte du site à compléter.
- `seo/OUTILS_GSC.md`, `seo/OUTILS_RANXPLORER.md` et `seo/BUDGET_API.md` : connexions et budget.
- `VERIFICATIONS.md` : contrôles effectués et points restant à vérifier.
- `PROVENANCE.md` et `ADAPTATION.json` : périmètre technique et inventaire de l’adaptation.

## Vérifications et limites

Les contrôles consignés au 15 octobre 2026 comprennent la validation des 32 définitions TOML, 24 tests hors ligne du connecteur Search Console, un essai du protocole MCP local sur Windows avec des données fictives et trois scénarios d’installation. Aucun compte Google ni accès API Ranxplorer réel n’a été connecté lors de ces essais.

Le chargement effectif des rôles, l’autorisation Google, l’accès à la propriété et la première collecte réelle restent à vérifier dans l’environnement de l’utilisateur. Les conversions Analytics, réponses des moteurs IA, rapports complets de couverture d’indexation et listes détaillées de backlinks nécessitent leurs propres sources selon la mission. Aucun résultat SEO n’est garanti par ces fichiers ou par leurs tests.

## Licence

Aucune licence open-source n’est déclarée pour cette version. Le périmètre de l’adaptation est décrit dans `PROVENANCE.md` dans le pack.
