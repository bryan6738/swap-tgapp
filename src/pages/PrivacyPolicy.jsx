import React from "react";

const PrivacyPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Privacy Policy</h2>
          <button onClick={onClose} className="text-2xl">
            &times;
          </button>
        </div>
        <div>
          {/* Add your privacy policy content here */}
          <p>
            {" "}
            Introduction : This introduction examines the legal obligations and
            responsibilities of an affiliate service operating within the
            cryptocurrency exchange ecosystem. Specifically, the focus is on the
            distinction between the affiliate service and the exchange provider,
            emphasizing the importance of legal compliance in this context. The
            affiliate service in question operates solely as an affiliate of a
            cryptocurrency exchange provider. The affiliate earns a 1%
            commission on each swap it brings to the exchange. It is important
            to clarify that this affiliate does not represent itself as the
            exchange, nor does it have any association with the exchange beyond
            its role as an affiliate. The relationship between the affiliate and
            the exchange provider is limited to promoting the exchange’s
            services in exchange for a commission or other compensation as
            outlined in the affiliate agreement. As part of its legal
            obligations, the affiliate is required to display the Terms of
            Service (ToS) and Privacy Policy of the exchange provider. These
            documents govern the relationship between the exchange provider and
            the end-users of its services. The affiliate service neither creates
            nor controls the terms set forth by the exchange provider but is
            legally mandated to ensure that these terms are accessible to users
            interacting with the affiliate’s platform. Moreover, the affiliate
            service adheres strictly to all legal and regulatory requirements
            necessary to maintain its status as an affiliate. This includes, but
            is not limited to, compliance with advertising standards,
            transparent disclosure of its affiliate relationship, and the lawful
            execution of all obligations under the affiliate agreement. The
            following sections will provide a detailed analysis of the exchange
            provider’s Terms of Service, emphasizing key legal considerations
            relevant to the affiliate’s obligations. This analysis serves to
            illustrate the affiliate’s role in the broader legal framework
            governing cryptocurrency exchanges and highlights the importance of
            clear and transparent communication with end-users. I as the user of
            this affiliate link consent to my IP Address, User Agent, Site
            Language, Accept Language, Device Timezone recorded for legal
            compliance. If You have any questions, contact support@teleswap.io.
            See the Exchange’s Privacy Policy below. <br />
            <br />
            <br />
            <br />
            Privacy Policy : 1. General information 1.1. References in this
            Privacy Policy to “SimpleSwap”, “Service”, “Application”, “App”
            relate to the website, available at https://simpleswap.io, operated
            by SimpleSwap. 1.2. SimpleSwap is the data controller regarding the
            Personal Data processed within the framework of this Privacy Policy.
            1.3. An individual can only become a Client of SimpleSwap and use
            its features if he/she is aged 18 or over or the age of majority in
            the country in which he/she resides if that happens to be greater
            than 18. SimpleSwap does not knowingly collect any information
            (including Personal Data) or market its services to minors or users
            under the age of majority. 1.4. SimpleSwap is committed to
            protecting and respecting the privacy of its Clients and ensures
            their security when using the Service. This Privacy Policy is
            intended to help the Client to understand what data and for which
            purposes Service collects, how collected data is processed and
            protected. 1.5. SimpleSwap reserves the right to amend this Privacy
            Policy; therefore it is recommended that the Client of the Service
            checks Privacy Policy on a regular basis. The service will send a
            notice or an email regarding such changes to the Client. 1.6. All
            the changes to this Privacy Policy are effective as of the “Last
            updated” date. The Client who continues to use the Service after the
            Last updated date is deemed to accept the changes made to it. 1.7.
            SimpleSwap expressly states and declares that no personal data of
            the Client is operated when Additional Services are provided to the
            Client pursuant to the Terms (Special Terms on Fiat to Crypto
            Exchange Services). That Client may be required to provide personal
            data to the third party rendering fiat to crypto exchange services
            and the operation by that third party of the Client personal data
            will by all means be regulated by that third party terms and
            conditions, and privacy policy. 2. Contact us 2.1. SimpleSwap has
            designated a Data Protection Officer (DPO) who could be reached by
            emailing to Emily@simpleswap.io or by post at the address provided
            above. 2.2. By registering with the Service, the Client consents to
            the processing of his/her Personal Data by the Service in accordance
            with the provisions set below. 2.3. By registering with the Service,
            the Client gives consent to SimpleSwap to anonymize his/her Personal
            Data for the purposes of further use in anonymized form in order to
            improve the performance of the Service. 3. Collected data 3.1. When
            using the Services, the Client agrees to the processing of the
            following Personal Data: 3.1.1. Personal Data that the Client
            provides to the Service: When creating an address, the Client
            obliges to provide the Service with basic details necessary for the
            Service to work as it might be requested, such as the Client’s name,
            gender, date of birth and location. SimpleSwap reserves the right to
            monitor or record interactions between the Client and the Support
            Service for training purposes and to ensure high quality of service.
            When participating in Client verification procedures: Client’s
            Personal Data, as requested by the Service for the Client
            identification purposes. When participating in surveys or focus
            groups: insights and evaluation of SimpleSwap’s services, responses
            to the questions from the Service. When proceeding with
            transactions: information required under AML/KYC applicable
            standards in order to ensure the security of transactions. While
            ordering merchant Product through SimpleSwap’s website: Client’s
            Personal Data, as required for the Product’s delivery, such as
            Client’s full name, postal address, phone number. 3.1.2. Personal
            Data collected through the use of the Service: When the Client is
            using SimpleSwap’s App, the Service may collect data regarding the
            device(s) the Client uses to access the Service (such as his/her IP
            address, device identifier (including unique advertising device
            identifiers, for example Google Advertiser ID and IDFA), technical
            and statistical data (including data about the Internet connection,
            cellular service provider and application usage data) and location
            data (upon a separate consent from the Client). 3.2. By providing
            Personal Data to SimpleSwap, the Client warrants that such data is
            true, accurate and up to date. 3.3. In case the Client is entitled
            to create a Client’s account instead of Client’s address, the
            present Privacy Policies shall be applicable accordingly. 4. Use of
            User’s/Client’s personal data 4.1. SimpleSwap collects, process and
            uses Personal Data of Clients of the Service based on the following
            grounds: when such processing is performed in order to fulfil the
            contract between the Service and the Client; based on legitimate
            interest of the Service; upon explicit prior consent from the
            Client. 4.2. SimpleSwap collects and processes Personal Data of the
            Service’s Clients in order to maintain the functionality of the
            Service, Product delivery and to ensure compliance with legal and
            business-related requirements. The User’s/Client’s Personal Data is
            processed for the following purposes: 4.2.1. When processing of
            personal data is related to fulfilment of the contract between the
            Service and the Client: to set up, operate and manage the Client’s
            address and, if necessary, to contact the respective Client through
            the means provided by the Client upon registration, in connection
            with the operation and management of the Client’s address; to
            analyze the Client’s profile, activity on the Service, preferences
            and current location in order to improve the Services; to proceed
            and respond to the requests and enquiries received from the Client;
            for administrative purposes, such as password reminders, service
            messages (including but not limited to the Website’s maintenance
            messages, updates to the Service’s Privacy Policy and Terms of
            Service). 4.2.2. Under legitimate interests of the Service: for
            Client verification purposes, conducted in relation to an ongoing or
            alleged misbehavior, performed by the Client of the Service, in
            order to block addresses as part of the Services anti-spam
            procedures, to investigate possible fraud; to evaluate the
            effectiveness of marketing and to perform market research and
            training. 4.2.3. Under an explicit consent from the Client: to
            facilitate networking opportunities of the Client with the Service
            by way of allowing him/her to add additional information to the
            Client’s address; to serve the Client with targeted Website
            advertisements; for remarketing purposes, allowing the Service to
            identify the Client who has previously visited the Website and
            optimize advertising information according to the Client’s
            preferences. This feature is used by the Service through third-party
            services such as Google Advertising and myTarget; to prepare
            statistics regarding the use of the Services by the Client; to
            identify possible technical malfunctions in the work of the Service,
            to assist internal research and development and to make improvements
            to the Website. 4.2.4. When processing delivery of the Products
            ordered by the Client: to facilitate the delivery of the Products
            ordered by the Client. 5. Duration of the Сlient’s data retention
            5.1. SimpleSwap retains the Client’s Personal Data for the period of
            time necessary to carry out relevant activities, specified in
            section 4 of this Privacy Policy and as permitted by applicable law.
            Personal Data, that the Client has communicated to the Service upon
            registration and subsequently through the use of the Service, will
            be retained by the Service as long as the Client remains the Client
            of the Service. 5.2. To protect the safety and security of the
            Clients of the Service, SimpleSwap implements a safety retention
            window of 30 days following a Client’s address deletion. 5.3.
            SimpleSwap reserves the right to store the Client’s Personal Data
            for a longer period of time than provided in paragraph 5.1., when it
            is performed in order to fulfill the legal obligations of the
            Service (including law enforcement requests, dispute resolution),
            ensure compliance with applicable law or when the relevant Personal
            Data is stored on the basis of the Service’s legitimate interests
            (including security reasons, prevention of fraud). 6. Disclosure of
            Personal Data 6.1. SimpleSwap may share the Client’s Personal Data
            with third parties in the following cases: Other Clients of
            SimpleSwap: The Client shares information with other Clients of
            SimpleSwap by way of voluntarily disclosing information on the
            Service (including but not limited to information in his/her
            Client’s profile). It is in the Client’s discretion to choose the
            information to be disclosed with the Service and SimpleSwap rescinds
            from responsibility for the other Clients of the Service regarding
            the way they might use such information, disclosed by the Client.
            Facilitation of Product’s delivery. SimpleSwap may share Client’s
            Personal Data with courier service providers in order to fulfill
            SimpleSwap’s obligations in relation to the Product’s delivery.
            Third-party advertising services. SimpleSwap uses the following
            services (list of services is provided alongside with privacy
            policies of the relevant services): Google Analytics Amplitude
            Mixpanel Third-party analytics services. SimpleSwap uses the
            following services (list of services is provided alongside with
            privacy policies of the relevant services): Google Analytics
            Amplitude Mixpanel Cloud services providers: Cloudflare Client
            support services. Providing Client’s data by law: SimpleSwap may
            disclose Client’s Personal Data when such disclosure is required by
            law and is reasonably necessary: in order to establish, exercise,
            defend or enforce legal rights of the Service; to comply with a
            legal process such as a court order, subpoena or search warrant,
            government / law enforcement investigation or other legal
            requirements; to assist in the prevention or detection of crime
            (subject in each case to applicable law); to protect the safety or
            vital interests of an individual. 6.2. SimpleSwap ensures
            appropriate contractual control over third parties assisting the
            Service in processing the Client’s Personal Data, securing that
            rights of Clients of the Service are upheld, their Personal Data is
            secure, appropriate security and privacy arrangements are in place.
            6.3. In the event of change in the corporate structure of the
            Service, resulting in transfer of the Client’s Personal Data to a
            third party, all the Clients of the Service would be notified of
            such changes via email and through a notice posted on the Service’s
            website. Respective notice would explain the identity of the new
            data controller and the Client’s options regarding disposal of their
            Personal Data. 7. Client’s rights 7.1. Every Client of the Service
            is a data subject and thus has ultimate rights over his/her Personal
            Data. 7.2. The rights of data subject over his/her Personal Data are
            as follows: Client’s right Description Access A right to know
            whether Personal Data concerning the Client is being processed by
            the Service, right to get information regarding processing of
            Personal data, right to request a copy of Personal Data being
            processed. Rectification A right to ask the Service to correct
            Client’s Personal Data in a situation when such data available to
            the Service or disclosed to third parties is inaccurate or
            incomplete. Erasure A right to request ‘to be forgotten’, meaning
            deletion of the Client’s Personal Data from the database of the
            Service so that the Service is not able to continue processing and
            storing of such data, with exceptions, provided by applicable law.
            Restrict processing Right to introduce the restriction regime on the
            processing of the Client’s Personal Data, so that in each case the
            data may be processed only upon separate consent from the Client.
            Data portability Right to request for the Personal Data provided to
            the Service to be given in a machine-readable format so that it
            could be transferred to another service provider or transfer
            directly to a third party designated by the Client. Object Right to
            object to processing his/her Personal Data in a case when the
            corresponding processing is not performed on the basis of the
            Client’s consent. Withdraw consent Right to withdraw consent to
            processing of his/her Personal Data by SimpleSwap and/or third party
            processors of Personal Data. The Client should note that withdrawal
            of consent to the processing of his/her will result in the deletion
            of his/her profile with the Service and the termination of his/her
            use of the Service. 7.3. The abovementioned rights are not absolute.
            In order to exercise some of the rights, the Client should meet
            certain conditions and requirements, specified by the law. 7.4. For
            more information regarding his/her rights over Personal Data, the
            Client/User of the Service should contact Emily@simpleswap.io. In
            order to exercise his/her rights, the Client should submit a request
            to Emily@simpleswap.io. 7.5. The Client/User of the Service should
            also be acknowledged of his/her right to complain to a data
            protection regulator in his/her jurisdiction. 8. Protection measures
            8.1. When using the Website, Client’s personal data is transferred
            by the Service to the domain www.simpleswap.io. 8.2. SimpleSwap
            works hard to protect its Clients from unauthorized access to or
            alteration, disclosure or destruction of their Personal Data. Yet,
            as any other technology companies, although SimpleSwap takes steps
            to secure Clients’ information, it could not be promised or
            guaranteed, that unauthorised access, hacking, data loss, or other
            breaches will never occur. SimpleSwap reserves the right to suspend
            the Client’s address without notice if there is a reasonable
            suspicion of breach of security. If you believe that your address or
            information is no longer secure, please notify SimpleSwap
            immediately by sending a message to Emily@simpleswap.io. 8.3. The
            Client should take reasonable steps in order to keep his/her
            Personal Data safe. 9. Cookies 9.1. In order to guarantee an optimal
            level of usability and performance and to ensure relevance of
            promoted services, SimpleSwap uses cookies and similar technologies
            in order to track the interaction of Clients with the Website. This
            section explains the different types of cookies that may be set when
            the Client uses the Website, helping to understand and manage them
            as he/she wishes. 9.2. A cookie is a small file that is stored
            locally at the Client’s technical device as soon as the Website is
            being visited. Cookies function by saving particular sets of data,
            such as, for example, the Client’s language selection. Should the
            Client open the Website again later, a cookie will transmit this
            data back to the Website. The Website’s cookies don't store personal
            information like the Client’s name or address. 9.3. Types of Cookies
            SimpleSwap’s Website uses different types of cookies: Session
            cookies only last only while the Client is visiting the Website and
            help SimpleSwap to learn more about Client’s use of the Website
            during a single session and to help the Client to use the Website
            more efficiently. Persistent cookies have a longer lifespan and
            aren't automatically deleted when the Client closes the Website.
            These cookies are primarily used to help the Client to sign-in into
            the Website again quickly, for security and analytical purposes.
            SimpleSwap does not use any information whilst the Client is logged
            off the Website. SimpleSwap uses first-party cookies that is when
            the cookies are placed on the Client’s device directly by the
            Service. For example, first-party cookies are used to adapt the
            Website to the language preferences and analyze user experience of
            the Client. Third-party cookies are placed on the Client’s device by
            SimpleSwap’s partners and service providers. 9.4. The Client can at
            any time reset device identifiers by activating the appropriate
            setting on his/her mobile device. The procedure for managing device
            identifiers is slightly different for each device. 9.5. Below is
            information about how SimpleSwap uses Clients’ cookies in the
            Website: Necessary cookies These cookies are strictly necessary to
            provide the Client SimpleSwap’s services. Authentication cookies
            These persistent cookies help the Service to identify the Clients so
            that the Client could log into the Website automatically. Analytics
            cookies These cookies help the Service to understand how the Website
            is being used, and help us customize and improve the Service. Google
            Analytics https://policies.google.com/privacy Amplitude
            https://amplitude.com/privacy Mixpanel
            https://mixpanel.com/legal/privacy-policy Cloudflare
            https://www.cloudflare.com/privacypolicy/ Satismeter
            https://www.satismeter.com/privacy-policy/ Sentry
            https://sentry.io/privacy/ Advertising cookies These cookies are
            used to make advertising messages more relevant to the Client. They
            perform functions like preventing the same ad from continuously
            reappearing, ensuring that ads are properly displayed for
            advertisers, selecting advertisements that are based on the Client’s
            interests and measuring the number of ads displayed and their
            performance, such as how many people clicked on a given ad. Social
            networking cookies These cookies are used to enable the Client to
            connect the Client’s address to third party social networks. 9.6.
            Below is information about how SimpleSwap uses Clients’ cookies on
            the simpleswap.io website: Necessary Necessary cookies help make a
            website usable by enabling basic functions like page navigation and
            access to secure areas of the website. The website cannot function
            properly without these cookies. Name Provider Purpose Expiry Type
            __cfduid Cloudflare Used by the content network, Cloudflare, to
            identify trusted web traffic. 29 days HTTP Cookie CookieConsent
            Simpleswap Stores the user's cookie consent state for the current
            domain. 1 year HTTP Cookie Local Storage Simpleswap Stores the
            user's cookie consent state for the current domain. 1 year HTTP
            Cookie 10. Cross-border data transfer 10.1. Disclosure of
            SimpleSwap’s Clients’ Personal Data, as provided in section 6 of
            these Terms of Service sometimes involves cross-border data
            transfers, for instance to Andorra, Argentina, Faroe Islands,
            Israel, New Zealand, Switzerland, Russian Federation and other
            jurisdictions. SimpleSwap uses standard contract clauses approved by
            the European Commission or other suitable safeguard to permit data
            transfers from the EEA to other countries. Standard contractual
            clauses are commitments between companies transferring personal
            data, binding them to protect the privacy and security of Client’s
            Personal Data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
