import { Download, FileText, Clock } from 'lucide-react';
import { schoolRules, schoolYear, supplyLists } from '../data/content';
import { formatArticleDate } from '../data/news';

// Ligne de document : bouton de téléchargement si le PDF est fourni, sinon mention « Bientôt disponible »
const DocumentRow = ({ title, detail, file }) => (
  <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50 rounded-xl p-5">
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-sakina-green flex items-center justify-center flex-shrink-0">
        <FileText className="w-5 h-5 text-white" aria-hidden="true" />
      </div>
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
        {detail && <p className="text-sm text-gray-600">{detail}</p>}
      </div>
    </div>
    {file ? (
      <a
        href={file}
        download
        className="print:hidden inline-flex items-center justify-center gap-2 bg-sakina-red text-white px-4 py-2 rounded-lg font-semibold hover:bg-sakina-red-dark transition-colors duration-300"
      >
        <Download className="w-4 h-4" aria-hidden="true" />
        <span>Télécharger<span className="sr-only"> : {title} (PDF)</span></span>
      </a>
    ) : (
      <span className="inline-flex items-center justify-center gap-2 text-sm text-gray-500 px-4 py-2">
        <Clock className="w-4 h-4" aria-hidden="true" />
        Bientôt disponible
      </span>
    )}
  </li>
);

const UsefulDocuments = () => (
  <section id="documents-utiles" className="py-20 bg-white scroll-mt-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sakina-green mb-4">Documents utiles</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Listes de fournitures par classe et règlement intérieur, à télécharger
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 print:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-sakina-green mb-6">
            Listes de fournitures{schoolYear && <span className="font-medium text-gray-600"> {schoolYear}</span>}
          </h3>
          <ul className="space-y-4">
            {supplyLists.map((list) => (
              <DocumentRow key={list.level} title={`Classe de ${list.level}`} detail="Liste des fournitures (PDF)" file={list.file} />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-sakina-green mb-6">Règlement intérieur</h3>
          <ul className="space-y-4">
            <DocumentRow
              title="Règlement intérieur du collège"
              detail={schoolRules.updated ? `Version du ${formatArticleDate(schoolRules.updated)}` : 'Document PDF'}
              file={schoolRules.file}
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default UsefulDocuments;
