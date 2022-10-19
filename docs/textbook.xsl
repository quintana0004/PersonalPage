<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/textbooks">
        <html>
            <head>
               <title>Jessica Q.</title>
               <link rel="icon" href="./images/GeometricFlowers.png"/>
               <meta charset="UTF-8" name="description" content="Personal web page"/>
               <link rel="stylesheet" href="./css/xml.css"/>
            </head>
            <body>
               <nav>
                  <a href="textbook.xml">XML</a>
                  <a href="HTML ANIMATION.html">Animation</a>
                  <a href="quiz.html">Quiz</a>
                  <a href="about.html" >About</a>
                  <a href="projects.html" >Projects</a>
                  <a href="home.html">Home V2</a>
                  <a href="index.html" >Home</a>
              </nav>
                <h1 style="font-style: oblique">Current Books Using This Trimester</h1>
                <div>
                    <h2>Micro Computer Interfacing</h2>
                    <table border="2">
                       <tr>
                            <td style="font-weight: bold" bgcolor="Aqua">Title: </td>
                            <td><xsl:value-of select="//book1/title"/></td> 
                        </tr>
                        <tr>
                            <td style="font-weight: bold" bgcolor="Aqua">Authors: </td>
                            <td>
                                <td>First Name: <xsl:value-of select="//book1/author/first_name"/></td><div></div>
                                <td>Last Name: <xsl:value-of select="//book1/author/last_name"/></td>
                            </td> 
                         </tr>
                         <tr>
                            <td style="font-weight: bold" bgcolor="Aqua">Publisher: </td>
                            <td><xsl:value-of select="//book1/publisher/name"/></td> 
                         </tr>
                         <tr>
                            <td style="font-weight: bold" bgcolor="Aqua">Publisher Web-Page: </td>
                            <td><xsl:value-of select="//book1/publisher/website"/></td> 
                         </tr>
                         <tr>
                            <td style="font-weight: bold" bgcolor="Aqua">Year Publication: </td>
                            <td><xsl:value-of select="//book1/year_of_publication"/></td> 
                         </tr>
                         <tr>
                            <td style="font-weight: bold" bgcolor="Aqua">ISBN: </td>
                            <td><xsl:value-of select="//book1/ISBN"/></td> 
                         </tr>
                         <tr>
                            <td style="font-weight: bold" bgcolor="Aqua">Book Web-Page: </td>
                            <td><xsl:value-of select="//book1/book_website"/></td> 
                         </tr>
                         <tr>
                            <td style="font-weight: bold" bgcolor="Aqua">Edition: </td>
                            <td><xsl:value-of select="//book1/edition"/></td> 
                         </tr>
                         <tr>
                            <td style="font-weight: bold" bgcolor="Aqua">Cover Type: </td>
                            <td><xsl:value-of select="//book1/cover_type"/></td> 
                         </tr>
                    </table>
                </div>
                
                <div>
                    <h2>Internet Programming</h2>
                    <table border="2">
                        <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Title: </td>
                             <td><xsl:value-of select="//book2/title"/></td> 
                         </tr>
                         <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Authors:</td>
                             <td>
                                <td>First Name: <xsl:value-of select="//book2/author/first_name"/></td><div></div>
                                <td>Last Name: <xsl:value-of select="//book2/author/last_name"/></td>
                             </td>
                            
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Publisher: </td>
                             <td><xsl:value-of select="//book2/publisher/name"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Publisher Web-Page: </td>
                             <td><xsl:value-of select="//book2/publisher/website"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Year Publication: </td>
                             <td><xsl:value-of select="//book2/year_of_publication"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">ISBN: </td>
                             <td><xsl:value-of select="//book2/ISBN"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Book Web-Page: </td>
                             <td><xsl:value-of select="//book2/book_website"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Edition: </td>
                             <td><xsl:value-of select="//book2/edition"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Cover Type: </td>
                             <td><xsl:value-of select="//book2/cover_type"/></td> 
                          </tr>
                     </table>
                </div>

                <div>
                    <h2>Advance Programming</h2>
                    <table border="2">
                        <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Title: </td>
                             <td><xsl:value-of select="//book3/title"/></td> 
                         </tr>
                         <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Authors: </td>
                             <td>
                                <td>First Name: <xsl:value-of select="//book3/author/first_name"/></td><div></div>
                                <td>Last Name: <xsl:value-of select="//book3/author/last_name"/></td>
                             </td>
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Publisher: </td>
                             <td><xsl:value-of select="//book3/publisher/name"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Publisher Web-Page: </td>
                             <td><xsl:value-of select="//book3/publisher/website"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Year Publication: </td>
                             <td><xsl:value-of select="//book3/year_of_publication"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">ISBN: </td>
                             <td><xsl:value-of select="//book3/ISBN"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Book Web-Page: </td>
                             <td><xsl:value-of select="//book3/book_website"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Edition: </td>
                             <td><xsl:value-of select="//book3/edition"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Cover Type: </td>
                             <td><xsl:value-of select="//book3/cover_type"/></td> 
                          </tr>
                     </table>
                </div>

                <div>
                    <h2>Data Communication</h2>
                    <table border="2">
                        <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Title: </td>
                             <td><xsl:value-of select="//book4/title"/></td> 
                         </tr>
                         <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Authors: </td>
                             <td>
                                <td >First Name: <xsl:value-of select="//book4/author/first_name"/></td><div></div>
                                <td>Last Name: <xsl:value-of select="//book4/author/last_name"/></td>
                             </td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Publisher: </td>
                             <td><xsl:value-of select="//book4/publisher/name"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Publisher Web-Page: </td>
                             <td><xsl:value-of select="//book4/publisher/website"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Year Publication: </td>
                             <td><xsl:value-of select="//book4/year_of_publication"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">ISBN: </td>
                             <td><xsl:value-of select="//book4/ISBN"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Book Web-Page: </td>
                             <td><xsl:value-of select="//book4/book_website"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Edition: </td>
                             <td><xsl:value-of select="//book4/edition"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold" bgcolor="Aqua">Cover Type: </td>
                             <td><xsl:value-of select="//book4/cover_type"/></td> 
                          </tr>
                     </table>
                </div>
                
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>