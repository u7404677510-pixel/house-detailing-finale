"use client";

import { useState, useEffect } from "react";
import { 
  Lock, 
  LogOut, 
  Users, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Euro,
  Loader2,
  RefreshCw,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, updateDoc, doc, Timestamp } from "firebase/firestore";

// ⚠️ Change these credentials in production!
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "momaxadmin123";

interface LeadDevis {
  id: string;
  surface: number;
  formuleName: string;
  prixTotal: number;
  status: string;
  createdAt: Timestamp;
}

interface LeadParrainage {
  id: string;
  parrainNom: string;
  parrainPrenom: string;
  parrainEmail: string;
  parrainTel: string;
  filleulNom: string;
  filleulAdresse: string;
  filleulTel: string;
  status: string;
  createdAt: Timestamp;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"devis" | "parrainage">("devis");
  
  const [leadsDevis, setLeadsDevis] = useState<LeadDevis[]>([]);
  const [leadsParrainage, setLeadsParrainage] = useState<LeadParrainage[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  // Check if already authenticated (session storage)
  useEffect(() => {
    const auth = sessionStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch data when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError("");

    // Simple authentication check
    setTimeout(() => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_auth", "true");
      } else {
        setLoginError("Identifiants incorrects");
      }
      setIsLoading(false);
    }, 500);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_auth");
    setUsername("");
    setPassword("");
  };

  const fetchData = async () => {
    setLoadingData(true);
    try {
      // Fetch devis
      const devisQuery = query(collection(db, "leads_devis"), orderBy("createdAt", "desc"));
      const devisSnapshot = await getDocs(devisQuery);
      const devisData = devisSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as LeadDevis[];
      setLeadsDevis(devisData);

      // Fetch parrainage
      const parrainageQuery = query(collection(db, "leads_parrainage"), orderBy("createdAt", "desc"));
      const parrainageSnapshot = await getDocs(parrainageQuery);
      const parrainageData = parrainageSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as LeadParrainage[];
      setLeadsParrainage(parrainageData);
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error);
    } finally {
      setLoadingData(false);
    }
  };

  const updateStatus = async (collectionName: string, docId: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, collectionName, docId), { status: newStatus });
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
    }
  };

  const formatDate = (timestamp: Timestamp) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate();
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "nouveau":
        return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700"><Clock className="h-3 w-3" /> Nouveau</span>;
      case "contacte":
        return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700"><Phone className="h-3 w-3" /> Contacté</span>;
      case "converti":
        return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700"><CheckCircle className="h-3 w-3" /> Converti</span>;
      case "perdu":
        return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700"><XCircle className="h-3 w-3" /> Perdu</span>;
      default:
        return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">{status}</span>;
    }
  };

  // Login Page
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-charcoal-dark to-charcoal flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-2 border-burgundy/30 shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-burgundy/10 flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-burgundy" />
            </div>
            <CardTitle className="text-2xl font-serif">Administration</CardTitle>
            <p className="text-muted-foreground text-sm">House Detailing by MSB</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Identifiant</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Entrez votre identifiant"
                  className="border-2"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez votre mot de passe"
                  className="border-2"
                />
              </div>
              {loginError && (
                <p className="text-red-500 text-sm text-center">{loginError}</p>
              )}
              <Button 
                type="submit" 
                className="w-full bg-burgundy hover:bg-burgundy-light"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Connexion...
                  </>
                ) : (
                  "Se connecter"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-charcoal-dark text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-serif font-bold">Administration</h1>
            <p className="text-sm text-gray-400">House Detailing by MSB</p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="border-white/30 text-white hover:bg-white/10"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Devis</p>
                  <p className="text-3xl font-bold text-charcoal">{leadsDevis.length}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Parrainages</p>
                  <p className="text-3xl font-bold text-charcoal">{leadsParrainage.length}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">CA Potentiel (Devis)</p>
                  <p className="text-3xl font-bold text-charcoal">
                    {leadsDevis.reduce((sum, lead) => sum + (lead.prixTotal || 0), 0).toLocaleString("fr-FR")}€
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Euro className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={activeTab === "devis" ? "default" : "outline"}
            onClick={() => setActiveTab("devis")}
            className={activeTab === "devis" ? "bg-burgundy hover:bg-burgundy-light" : ""}
          >
            <FileText className="h-4 w-4 mr-2" />
            Demandes de Devis ({leadsDevis.length})
          </Button>
          <Button
            variant={activeTab === "parrainage" ? "default" : "outline"}
            onClick={() => setActiveTab("parrainage")}
            className={activeTab === "parrainage" ? "bg-burgundy hover:bg-burgundy-light" : ""}
          >
            <Users className="h-4 w-4 mr-2" />
            Parrainages ({leadsParrainage.length})
          </Button>
          <Button
            variant="outline"
            onClick={fetchData}
            disabled={loadingData}
            className="ml-auto"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${loadingData ? "animate-spin" : ""}`} />
            Actualiser
          </Button>
        </div>

        {/* Content */}
        {loadingData ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-burgundy" />
          </div>
        ) : activeTab === "devis" ? (
          // Devis Table
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Demandes de Devis</CardTitle>
            </CardHeader>
            <CardContent>
              {leadsDevis.length === 0 ? (
                <p className="text-center text-muted-foreground py-10">Aucune demande de devis pour le moment</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Formule</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Surface</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Prix Estimé</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leadsDevis.map((lead) => (
                        <tr key={lead.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              {formatDate(lead.createdAt)}
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm font-medium">{lead.formuleName}</td>
                          <td className="py-3 px-4 text-sm">{lead.surface} m²</td>
                          <td className="py-3 px-4 text-sm font-bold text-burgundy">{lead.prixTotal?.toLocaleString("fr-FR")}€</td>
                          <td className="py-3 px-4">{getStatusBadge(lead.status)}</td>
                          <td className="py-3 px-4">
                            <select 
                              value={lead.status}
                              onChange={(e) => updateStatus("leads_devis", lead.id, e.target.value)}
                              className="text-sm border rounded px-2 py-1"
                            >
                              <option value="nouveau">Nouveau</option>
                              <option value="contacte">Contacté</option>
                              <option value="converti">Converti</option>
                              <option value="perdu">Perdu</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          // Parrainage Table
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Parrainages</CardTitle>
            </CardHeader>
            <CardContent>
              {leadsParrainage.length === 0 ? (
                <p className="text-center text-muted-foreground py-10">Aucun parrainage pour le moment</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Parrain</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Filleul</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leadsParrainage.map((lead) => (
                        <tr key={lead.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              {formatDate(lead.createdAt)}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-sm">
                              <p className="font-medium">{lead.parrainPrenom} {lead.parrainNom}</p>
                              {lead.parrainTel && (
                                <p className="text-muted-foreground flex items-center gap-1">
                                  <Phone className="h-3 w-3" /> {lead.parrainTel}
                                </p>
                              )}
                              {lead.parrainEmail && (
                                <p className="text-muted-foreground flex items-center gap-1">
                                  <Mail className="h-3 w-3" /> {lead.parrainEmail}
                                </p>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-sm">
                              <p className="font-medium">{lead.filleulNom}</p>
                              <p className="text-muted-foreground flex items-center gap-1">
                                <Phone className="h-3 w-3" /> {lead.filleulTel}
                              </p>
                              <p className="text-muted-foreground flex items-center gap-1 text-xs">
                                <MapPin className="h-3 w-3" /> {lead.filleulAdresse}
                              </p>
                            </div>
                          </td>
                          <td className="py-3 px-4">{getStatusBadge(lead.status)}</td>
                          <td className="py-3 px-4">
                            <select 
                              value={lead.status}
                              onChange={(e) => updateStatus("leads_parrainage", lead.id, e.target.value)}
                              className="text-sm border rounded px-2 py-1"
                            >
                              <option value="nouveau">Nouveau</option>
                              <option value="contacte">Contacté</option>
                              <option value="converti">Converti</option>
                              <option value="perdu">Perdu</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
