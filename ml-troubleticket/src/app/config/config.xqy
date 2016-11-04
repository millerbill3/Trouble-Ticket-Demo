(:
Copyright 2012-2015 MarkLogic Corporation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
:)
xquery version "1.0-ml";

module namespace c = "http://marklogic.com/roxy/config";

import module namespace def = "http://marklogic.com/roxy/defaults" at "/roxy/config/defaults.xqy";

declare namespace rest = "http://marklogic.com/appservices/rest";

(:
 : ***********************************************
 : Overrides for the Default Roxy control options
 :
 : See /roxy/config/defaults.xqy for the complete list of stuff that you can override.
 : Roxy will check this file (config.xqy) first. If no overrides are provided then it will use the defaults.
 :
 : Go to https://github.com/marklogic/roxy/wiki/Overriding-Roxy-Options for more details
 :
 : ***********************************************
 :)
declare variable $c:ROXY-OPTIONS :=
  <options>
    <layouts>
      <layout format="html">three-column</layout>
    </layouts>
  </options>;

(:
 : ***********************************************
 : Overrides for the Default Roxy scheme
 :
 : See /roxy/config/defaults.xqy for the default routes
 : Roxy will check this file (config.xqy) first. If no overrides are provided then it will use the defaults.
 :
 : Go to https://github.com/marklogic/roxy/wiki/Roxy-URL-Rewriting for more details
 :
 : ***********************************************
 :)
declare variable $c:ROXY-ROUTES :=
  <routes xmlns="http://marklogic.com/appservices/rest">

    <request uri="^/assets" endpoint="/ember/assets">
      <http method="GET"/>
    </request>
    <request uri="^/fonts" endpoint="/ember/fonts">
      <http method="GET"/>
    </request>
    <request uri="^/controllers/tt-controller/troubleTickets/?$" endpoint="/roxy/update-router.xqy">
      <http method="GET"/>
      <uri-param name="func">getTickets</uri-param>
      <uri-param name="controller">tt-controller</uri-param>
      <uri-param name="format">application/json</uri-param>
    </request>
    <request uri="^/controllers/tt-controller/troubleTickets/([0-9a-f]{8}\-[0-9a-f]{4}\-[1-5][0-9a-f]{3}\-[89ab][0-9a-f]{3}\-[0-9a-f]{12})$" endpoint="/roxy/update-router.xqy">
      <http method="GET"/>
      <uri-param name="func">getTicket</uri-param>
      <uri-param name="controller">tt-controller</uri-param>
      <uri-param name="format">application/json</uri-param>
      <uri-param name="id">$1</uri-param>
    </request>
    <request uri="^/.*" endpoint="/ember/index.html">
      <http method="GET"/>
    </request>
    <request uri="^/controllers/tt-controller/troubleTickets/?$" endpoint="/roxy/update-router.xqy">
      <http method="POST"/>
      <http method="PUT"/>
      <uri-param name="func">update</uri-param>
      <uri-param name="controller">tt-controller</uri-param>
      <uri-param name="format">application/json</uri-param>
    </request>
    <request uri="^/my/awesome/route" />
    {
      $def:ROXY-ROUTES/rest:request
    }

  </routes>;

(:
 : ***********************************************
 : What is the default language of the controllers defined in the <request>
 : sjs - Serverside JavaScript
 : xqy - XQuery (default)
 :
 : Override this setting in the build.properties with the "controller-ext" key value pair.
 :
 : ***********************************************
 :)
declare variable $c:CTRL-EXT := ("@ml.controller-ext", $def:CTRL-EXT)[1];

(:
 : ***********************************************
 : A decent place to put your appservices search config
 : and various other search options.
 : The examples below are used by the appbuilder style
 : default application.
 : ***********************************************
 :)
declare variable $c:DEFAULT-PAGE-LENGTH as xs:int := 5;

declare variable $c:SEARCH-OPTIONS :=
  <options xmlns="http://marklogic.com/appservices/search">
    <search-option>unfiltered</search-option>
    <term>
      <term-option>case-insensitive</term-option>
    </term>
    <constraint name="facet1">
      <collection>
        <facet-option>limit=10</facet-option>
      </collection>
    </constraint>

    <return-results>true</return-results>
    <return-query>true</return-query>
  </options>;

(:
 : Labels are used by appbuilder faceting code to provide internationalization
 :)
declare variable $c:LABELS :=
  <labels xmlns="http://marklogic.com/xqutils/labels">
    <label key="facet1">
      <value xml:lang="en">Sample Facet</value>
    </label>
  </labels>;
