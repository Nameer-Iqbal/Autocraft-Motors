import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  User,
  Mail,
  PhoneCall,
  Edit2,
  Check,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroShowroom from "@/assets/hero-showroom.jpg";

export default function Profile() {
  const navigate = useNavigate();
  const { isAuthenticated, user, updateUser } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
  });

  // Redirect to home if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // Initialize form data when user changes
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        contactNumber: user.contactNumber || "",
      });
    }
  }, [user]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleSave = () => {
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      toast({
        title: "Validation Error",
        description: "First name and last name are required.",
        variant: "destructive",
      });
      return;
    }

    const updatedData = {
      firstName: formData.firstName.trim() || user?.firstName || "",
      lastName: formData.lastName.trim() || user?.lastName || "",
      contactNumber: formData.contactNumber.trim() || "",
    };

    updateUser(updatedData);

    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleCancel = () => {
    setFormData({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      contactNumber: user.contactNumber || "",
    });
    setIsEditing(false);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-12 relative"
      style={{
        backgroundImage: `url(${heroShowroom})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Back Button */}
      <div className="absolute top-8 left-8 z-10">
        <Button
          onClick={() => navigate("/")}
          size="sm"
          className="gap-2 bg-emerald-600 text-white hover:bg-emerald-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </div>

      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-white/90">
            View and manage your account information
          </p>
        </div>

        {/* Profile Card */}
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Profile Info */}
              <div className="flex items-start justify-between pb-6 border-b border-gray-200">
                <div className="flex items-start gap-6 flex-1">
                  <div className="h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center">
                    <User className="h-10 w-10 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    {isEditing ? (
                      <div className="space-y-2">
                        <div>
                          <Label
                            htmlFor="firstName"
                            className="text-sm text-gray-500"
                          >
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                firstName: e.target.value,
                              })
                            }
                            className="bg-white text-gray-900"
                            placeholder="First Name"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="lastName"
                            className="text-sm text-gray-500"
                          >
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                lastName: e.target.value,
                              })
                            }
                            className="bg-white text-gray-900"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">
                          {user.firstName} {user.lastName}
                        </h2>
                        <p className="text-gray-600">
                          Member since{" "}
                          {new Date().toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                          })}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                {!isEditing && (
                  <Button
                    onClick={() => setIsEditing(true)}
                    size="sm"
                    variant="outline"
                    className="gap-2"
                  >
                    <Edit2 className="h-4 w-4" />
                    Edit
                  </Button>
                )}
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Email Address</p>
                    <p className="text-base font-semibold text-gray-900">
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    {isEditing ? (
                      <div>
                        <Label
                          htmlFor="contactNumber"
                          className="text-sm text-gray-500"
                        >
                          Contact Number
                        </Label>
                        <Input
                          id="contactNumber"
                          value={formData.contactNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              contactNumber: e.target.value,
                            })
                          }
                          className="bg-white text-gray-900"
                          placeholder="Contact Number"
                          type="tel"
                        />
                      </div>
                    ) : (
                      <>
                        <p className="text-sm text-gray-500 mb-1">
                          Contact Number
                        </p>
                        <p className="text-base font-semibold text-gray-900">
                          {user.contactNumber || "Not provided"}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Edit Mode Actions */}
              {isEditing && (
                <div className="pt-4 border-t border-gray-200 flex gap-3">
                  <Button
                    onClick={handleSave}
                    className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700 gap-2"
                  >
                    <Check className="h-4 w-4" />
                    Save Changes
                  </Button>
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    className="flex-1 gap-2"
                  >
                    <X className="h-4 w-4" />
                    Cancel
                  </Button>
                </div>
              )}

              {/* Regular Actions */}
              {!isEditing && (
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => navigate("/inventory")}
                      className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      Browse Inventory
                    </Button>
                    <Button
                      onClick={() => navigate("/contact")}
                      className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
