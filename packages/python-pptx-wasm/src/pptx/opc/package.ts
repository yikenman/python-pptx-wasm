// not use in public method:
// OpcPackage
// _PackageLoader
// PartFactory
// _ContentTypeMap
// _Relationships
// _Relationship

import { append_packed_id, PackedBase, py_funs } from '../../bridge';
import { BaseOxmlElement } from '../oxml/xmlchemy';

/**
 * Provide relationship methods required by both the package and each part.
 */
export class _RelatableMixin extends PackedBase {
  /**
   * Return (single) part having relationship to this package of `reltype`.
   * Raises `KeyError` if no such relationship is found and `ValueError` if more than one such
   * relationship is found.
   */
  part_related_by(reltype: string) {
    const pid = append_packed_id(this.packed_id, 'part_related_by');
    return py_funs.call_method_returns_instance(pid, Part, arguments, reltype);
  }

  /**
   * Return rId key of relationship of `reltype` to `target`.
   * If such a relationship already exists, its rId is returned. Otherwise the relationship is
   * added and its new rId returned.
   */
  relate_to(target: Part | string, reltype: string, is_external: boolean = false) {
    const pid = append_packed_id(this.packed_id, 'relate_to');
    return py_funs.call_method<string>(pid, arguments, target, reltype, is_external);
  }

  /**
   * Return related `Part` subtype identified by `rId`.
   */
  related_part(rId: string) {
    const pid = append_packed_id(this.packed_id, 'related_part');
    return py_funs.call_method_returns_instance(pid, Part, arguments, rId);
  }

  /**
   * Return URL contained in target ref of relationship identified by `rId`.
   */
  target_ref(rId: string) {
    const pid = append_packed_id(this.packed_id, 'target_ref');
    return py_funs.call_method<string>(pid, arguments, rId);
  }
}

/**
 * Base class for package parts.
 * Provides common properties and methods, but intended to be subclassed in client code to
 * implement specific part behaviors. Also serves as the default class for parts that are not yet
 * given specific behaviors.
 */
export class Part extends _RelatableMixin {
  /**
   * Contents of this package part as a sequence of bytes.
   * Intended to be overridden by subclasses. Default behavior is to return the blob initial
   * loaded during `Package.open()` operation.
   */
  set blob(blob: Uint8Array) {
    const pid = append_packed_id(this.packed_id, 'blob');
    py_funs.set_attr(pid, blob);
  }
  get blob() {
    const pid = append_packed_id(this.packed_id, 'blob');
    return py_funs.get_attr<Uint8Array>(pid);
  }

  /**
   * Content-type (MIME-type) of this part.
   */
  get content_type() {
    const pid = append_packed_id(this.packed_id, 'content_type');
    return py_funs.get_attr<string>(pid);
  }

  /**
   * Load _Relationships for this part from `xml_rels`.
   *
   * Part references are resolved using the `parts` dict that maps each partname to the loaded
   * part with that partname. These relationships are loaded from a serialized package and so
   * already have assigned rIds. This method is only used during package loading.
   *
   * not implemented
   */
  load_rels_from_xml() {
    console.log('not implemented.');
    return undefined;
  }

  /**
   * Package this part belongs to.
   *
   * not implemented
   */
  get package() {
    console.log('not implemented.');
    return undefined;
  }

  /**
   * not implemented
   */
  // set partname(partname: PackURI) { }
  /**
   * `PackURI` partname for this part, e.g. "/ppt/slides/slide1.xml".
   *
   * not implemented
   */
  get partname() {
    console.log('not implemented.');
    return undefined;
  }

  /**
   * Collection of relationships from this part to other parts.
   *
   * not implemented
   */
  get rels() {
    console.log('not implemented.');
    return undefined;
  }
}

/**
 * Base class for package parts containing an XML payload, which is most of them.
 * Provides additional methods to the |Part| base class that take care of parsing and
 * reserializing the XML payload and managing relationships to other parts.
 */
export class XmlPart extends Part {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, BaseOxmlElement);
  }

  /**
   * bytes XML serialization of this part.
   */
  get blob() {
    const pid = append_packed_id(this.packed_id, 'blob');
    return py_funs.get_attr<Uint8Array>(pid);
  }

  /**
   * Remove relationship identified by `rId` if its reference count is under 2.
   * Relationships with a reference count of 0 are implicit relationships. Note that only XML
   * parts can drop relationships.
   */
  drop_rel(rId: string) {
    const pid = append_packed_id(this.packed_id, 'drop_rel');
    return py_funs.call_method<undefined>(pid, arguments, rId);
  }

  /**
   * This part.
   * This is part of the parent protocol, "children" of the document will not know the part
   * that contains them so must ask their parent object. That chain of delegation ends here for
   * child objects.
   */
  get part() {
    return this;
  }
}
